import io, { Socket } from "socket.io-client";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import LiveChatPresenter from "./live-chat.presenter";
import { FETCH_CHAT_LOGS, IS_SPECIALIST } from "./live-chat.queries";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { TicketState } from "../../commons/store";
import { getSpecialistInfo } from "../../../commons/libraries/getSpecialistInfo";

const url = "https://lookatmeserver.shop/chat";

export default function LiveChatContainer() {
  const router = useRouter();
  const userInfo = getUserInfo();
  const specialistInfo = getSpecialistInfo();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [ticketId, setTicketId] = useRecoilState(TicketState);
  const [userId, setUserId] = useState<string | undefined>("");
  const [specialistId, setSpecialistId] = useState<string | undefined>("");
  const [resultMsg, setResultMsg] = useState<string[]>([]);
  const [nickname, setNickName] = useState<string | undefined>("");
  const [specialistName, setSpecialistName] = useState<string | undefined>("");
  const [receive, setReceive] = useState("");

  const { data } = useQuery<Pick<IQuery, "fetchChatLogs">>(FETCH_CHAT_LOGS, {
    variables: {
      ticketId: String(ticketId),
    },
  });

  const { data: SpecialistData } =
    useQuery<Pick<IQuery, "isSpecialist">>(IS_SPECIALIST);

  const socket: Socket = io(url, { transports: ["websocket"] });

  // const socket = io("https://lookatmeserver.shop/chat");

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: "",
    },
  });

  useEffect(() => {
    setUserId(userInfo?.fetchLoginUser.id);
    setSpecialistId(specialistInfo?.fetchLoginSpecialist.id);
    setNickName(userInfo?.fetchLoginUser.nickname);
  }, [ticketId, userInfo, setReceive]);

  useEffect(() => {
    if (!SpecialistData?.isSpecialist) {
      socket.emit("user_enter", ticketId);
    } else {
      socket.emit("specialist_enter", ticketId);
    }

    socket.on("connect", () => {
      // send
      socket.on(ticketId, (data) => {
        setResultMsg((prev) => [...prev, data]);
      });
      // enter
      socket.on("receive" + ticketId, (receive) => {
        setReceive(receive);
      });
    });
  }, [setResultMsg]);

  const onClickSendMessage = async (data) => {
    const message = await data.contents;
    socket.emit("user_send", ticketId, message);
    resetField("contents");
    await delay(100);
    return messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const onClickSendSpecialMessage = async (data) => {
    const message = await data.contents;
    socket.emit("specialist_send", ticketId, message);
    resetField("contents");
    await delay(100);
    return messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const onKeyDown = (event: KeyboardEvent) => (data) => {
    if (event.key === "Enter") {
      if (SpecialistData?.isSpecialist) {
        onClickSendSpecialMessage(data);
      } else {
        onClickSendMessage(data);
      }
    }
  };

  return (
    <LiveChatPresenter
      resultMsg={resultMsg}
      userId={userId}
      register={register}
      handleSubmit={handleSubmit}
      onClickSendMessage={onClickSendMessage}
      onClickSendSpecialMessage={onClickSendSpecialMessage}
      onKeyDown={onKeyDown}
      data={data}
      SpecialistData={SpecialistData?.isSpecialist}
      messagesEndRef={messagesEndRef}
      nickname={nickname}
      specialistName={specialistName}
      receive={receive}
    ></LiveChatPresenter>
  );
}

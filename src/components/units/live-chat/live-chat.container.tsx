import io, { Socket } from "socket.io-client";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import LiveChatPresenter from "./live-chat.presenter";
import { FETCH_CHAT_LOGS, IS_SPECIALIST } from "./live-chat.queries";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { TicketState } from "../../../commons/store";
import { useRouter } from "next/router";

const url = "https://lookatmeserver.shop/chat";

export default function LiveChatContainer() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [ticketId] = useRecoilState(TicketState);
  const [userId] = useState<string | undefined>("");
  const [resultMsg, setResultMsg] = useState<string[]>([]);
  const [nickname] = useState<string | undefined>("");
  const [specialistName] = useState<string | undefined>("");
  const [receive] = useState("");

  const { data } = useQuery<Pick<IQuery, "fetchChatLogs">>(FETCH_CHAT_LOGS, {
    variables: {
      ticketId: String(ticketId),
    },
  });

  const { data: SpecialistData } =
    useQuery<Pick<IQuery, "isSpecialist">>(IS_SPECIALIST);

  const socket: Socket = io(url, { transports: ["websocket"] });

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
    // send
    socket.on(ticketId, (data: any) => {
      setResultMsg((prev) => [...prev, data]);
    });
  }, [ticketId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  const onClickSendMessage = async (data: any) => {
    const message = await data.contents;
    socket.emit("user_send", ticketId, message);
    resetField("contents");
    await delay(100);
    return messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const onClickSendSpecialMessage = async (data: any) => {
    const message = await data.contents;
    socket.emit("specialist_send", ticketId, message);
    resetField("contents");
    await delay(100);
    return messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const onKeyDown = (event: KeyboardEvent) => (data: any) => {
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

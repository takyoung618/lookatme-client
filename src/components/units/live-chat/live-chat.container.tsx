import io, { Socket } from "socket.io-client";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import LiveChatPresenter from "./live-chat.presenter";
import { FETCH_CHAT_LOGS } from "./live-chat.queries";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { useForm } from "react-hook-form";

const url = "http://localhost:3000/chat";

export default function LiveChatContainer() {
  const router = useRouter();
  const userInfo = getUserInfo();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [nickname, setNickname] = useState<string | undefined>("");
  const [ticketId, setTicketId] = useState<string | undefined>("");
  const [userId, setUserId] = useState<string | undefined>("");
  const [resultMsg, setResultMsg] = useState<string[]>([]);

  const { data } = useQuery<Pick<IQuery, "fetchChatLogs">>(FETCH_CHAT_LOGS, {
    variables: {
      room: userInfo?.fetchLoginUser.id,
    },
  });

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
    socket.on(ticketId, (data) => {
      setResultMsg((prev: string[]) => [...prev, data]);
    });
  }, [ticketId]);

  useEffect(() => {
    setUserId(userInfo?.fetchLoginUser.id);
    setTicketId(userInfo?.fetchLoginUser.id);
    setNickname(userInfo?.fetchLoginUser.nickname);
  }, [userInfo]);

  const onClickSendMessage = async (data) => {
    const message = await data.contents;
    socket.emit("sent", ticketId, nickname, message, userId);
    resetField("contents");
    await delay(100);
    return messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const onKeyDown = (event: KeyboardEvent) => (data) => {
    if (event.key === "Enter") {
      onClickSendMessage(data);
    }
  };

  return (
    <LiveChatPresenter
      resultMsg={resultMsg}
      userId={userId}
      register={register}
      handleSubmit={handleSubmit}
      onClickSendMessage={onClickSendMessage}
      onKeyDown={onKeyDown}
      data={data}
      messagesEndRef={messagesEndRef}
    ></LiveChatPresenter>
  );
}

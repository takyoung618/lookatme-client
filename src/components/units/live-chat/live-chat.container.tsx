import io from "socket.io-client";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import LiveChatPresenter from "./live-chat.presenter";
import { FETCH_CHAT_LOGS } from "./live-chat.queries";
import { useRouter } from "next/router";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";

interface Message {
  author: String;
  message: String;
}

export default function LiveChatContainer() {
  const socket = io("http://localhost:3000/chat");

  const router = useRouter();
  const userInfo = getUserInfo();

  const [username, setUsername] = useState("");
  const [chosenUsername, setChosenUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<Message>>([]);

  const { data } = useQuery<Pick<IQuery, "fetchChatLogs">>(FETCH_CHAT_LOGS, {
    variables: {
      room: userInfo?.fetchLoginUser.id,
    },
  });

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message },
      ]);
    });
  };

  const sendMessage = async () => {
    socket.emit("createMessage", {
      author: chosenUsername,
      message,
    });
    setMessages((currentMsg) => [
      ...currentMsg,
      { author: chosenUsername, message },
    ]);
    setMessage("");
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  return (
    <LiveChatPresenter
      username={username}
      setUsername={setUsername}
      chosenUsername={chosenUsername}
      setChosenUsername={setChosenUsername}
      messages={messages}
      message={message}
      setMessage={setMessage}
      handleKeypress={handleKeypress}
      sendMessage={sendMessage}
      data={data}
    ></LiveChatPresenter>
  );
}

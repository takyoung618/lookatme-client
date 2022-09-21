import { RefObject } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IQuery } from "../../../commons/types/generated/types";

export interface ILiveChatProps {
  resultMsg: string[];
  userId: string | undefined;
  register: UseFormRegister<{ contents: string }>;
  handleSubmit: UseFormHandleSubmit<{ contents: string }>;
  onClickSendMessage: (data: any) => Promise<void | undefined>;
  onClickSendSpecialMessage: (data: any) => Promise<void | undefined>;
  onKeyDown: any;
  data: Pick<IQuery, "fetchChatLogs"> | undefined;
  SpecialistData: boolean | undefined;
  messagesEndRef: RefObject<HTMLDivElement>;
  nickname: string | undefined;
  specialistName: string | undefined;
  receive: string;
}

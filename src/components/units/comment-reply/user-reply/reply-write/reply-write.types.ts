import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { SetterOrUpdater } from "recoil";
import {
  IComment,
  IUnderComment,
} from "../../../../../commons/types/generated/types";

export interface IUserReplyWriteContainerProps {
  UserCommentEl: IComment;
  setIsUnderReply: SetterOrUpdater<boolean>;
  UserUnderCommentEl: IUnderComment;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
}

export interface IUserReplyWritePresenterProps {
  contents: string;
  contentsLength: number;
  contentsError: string;
  onChangeUnderComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUserUnderComment: () => void;
  UserUnderCommentEl: IUnderComment;
  isEdit: boolean;
  onClickUpdateUserUnderComment: () => void;
}

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IUserReplyEditContainerProps {
  UserUnderCommentEl:
    | Pick<IQuery, "fetchUnderCommentsWithCommentId">
    | undefined;
  UserUnderCommentData:
    | Pick<IQuery, "fetchUnderCommentsWithCommentId">
    | undefined;
}

export interface IUserReplyEditPresenterProps {
  UserUnderCommentEl:
    | Pick<IQuery, "fetchUnderCommentsWithCommentId">
    | undefined;
  UserUnderCommentData:
    | Pick<IQuery, "fetchUnderCommentsWithCommentId">
    | undefined;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  userUnderCommentsEditContents: string;
  onClickUserUnderCommentEdit: () => void;
  onClickDeleteUserUnderComment: () => void;
  onChangeEditUserUnderComment: (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

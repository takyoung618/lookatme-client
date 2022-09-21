import { ChangeEvent } from "react";
import { SetterOrUpdater } from "recoil";
import { IComment, IQuery } from "../../../../../commons/types/generated/types";

export interface ICommentEditUserContainer {
  UserCommentEl: IComment;
  UserCommentData: Pick<IQuery, "fetchCommentsWithStoryId"> | undefined;
}

export interface ICommentEditUserPresenter {
  isUserCommentEdit: boolean;
  setIsUserCommentEdit: SetterOrUpdater<boolean>;
  editUserContents: string;
  onClickUserEdit: () => void;
  onClickUserDelete: () => void;
  onChangeEditUserContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  UserCommentEl: IComment;
  UserCommentData: Pick<IQuery, "fetchCommentsWithStoryId"> | undefined;
  userInfo: Pick<IQuery, "fetchLoginUser"> | undefined;
  isUserReply: boolean;
  setIsUserReply: SetterOrUpdater<boolean>;
  onClickUserReply: () => void;
  onClickLikeComment: (event: MouseEvent<HTMLDivElement>) => void;
}

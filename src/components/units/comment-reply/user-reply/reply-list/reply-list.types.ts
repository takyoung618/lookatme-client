import { IComment, IQuery } from "../../../../../commons/types/generated/types";

export interface IUserReplyListContainerProps {
  UserCommentEl: IComment;
}

export interface IUserReplyListPresenterProps {
  UserUnderCommentData:
    | Pick<IQuery, "fetchUnderCommentsWithCommentId">
    | undefined;
}

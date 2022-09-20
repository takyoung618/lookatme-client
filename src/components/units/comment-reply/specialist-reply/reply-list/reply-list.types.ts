import {
  IQuery,
  ISpecialistComment,
} from "../../../../../commons/types/generated/types";

export interface ISpecialistReplyListContainerProps {
  SpecialistCommentEl: ISpecialistComment;
}

export interface ISpecialistReplyListPresenterProps {
  SpecialistUnderCommentData: Pick<IQuery, "fetchUnderSpecialistCommentWithId">;
}

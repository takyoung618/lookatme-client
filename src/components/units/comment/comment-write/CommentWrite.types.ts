import { ChangeEvent } from "react";
import { IComment, IQuery } from "../../../../commons/types/generated/types";

export interface ICommentWritePresenterProps {
  isSpecialist: Pick<IQuery, "isSpecialist"> | undefined;
  comment: string;
  commentError: string;
  commentLength: number;
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUserCommentButton: () => void;
  onClickUserCommentEditButton: () => void;
  onClickSpecialistCommentButton: () => void;
  onClickSpecialistCommentEditButton: () => void;
  UserCommentEl: IComment;
}

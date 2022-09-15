import { ChangeEvent } from "react";

export interface ICommentWritePresenterProps {
  comment: string;
  commentError: string;
  commentLength: number;
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentButton: () => void;
  onClickCommentEditButton: () => void;
}

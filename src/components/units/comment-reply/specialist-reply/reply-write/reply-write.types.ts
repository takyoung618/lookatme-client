import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  ISpecialistComment,
  IUnderSpecialistComment,
} from "../../../../../commons/types/generated/types";

export interface ISpecialistReplyWriteContainer {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  SpecialistUnderCommentEl: IUnderSpecialistComment;
  SpecialistCommentEl: ISpecialistComment;
  setIsSpecialistReply: Dispatch<SetStateAction<boolean>>;
}

export interface ISpecialistReplyWritePresenterProps {
  contents: string;
  contentsLength: number;
  contentsError: string;
  onChangeSpecialistUnderComment: (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onClickSpecialistUnderComment: () => void;
  onClickUpdateSpecialistUnderComment: () => void;
  isEdit: boolean;
  SpecialistUnderCommentEl: IUnderSpecialistComment;
}

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { SetterOrUpdater } from "recoil";
import {
  IComment,
  ISpecialistComment,
} from "../../../../commons/types/generated/types";

export interface ICommentWriteContainerProps {
  isExpertCommentEdit: boolean;
  setIsExpertCommentEdit: Dispatch<SetStateAction<boolean>>;
  SpecialistCommentEl: ISpecialistComment;
  isUserCommentEdit: boolean;
  setIsUserCommentEdit: SetterOrUpdater<boolean>;
  UserCommentEl: IComment;
}

export interface ICommentWritePresenterProps {
  isSpecialist: boolean | undefined;
  text: string;
  textError: string;
  textLength: number;
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUserCommentButton: () => void;
  onClickUserCommentEditButton: () => void;
  onClickSpecialistCommentButton: () => void;
  onClickSpecialistCommentEditButton: () => void;
  isExpertCommentEdit: boolean;
  SpecialistCommentEl: ISpecialistComment;
  isUserCommentEdit: boolean;
  UserCommentEl: IComment;
}

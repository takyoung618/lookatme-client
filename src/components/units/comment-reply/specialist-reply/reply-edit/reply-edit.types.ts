import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IQuery,
  IUnderSpecialistComment,
} from "../../../../../commons/types/generated/types";

export interface ISpecialistReplyEditContainerProps {
  SpecialistUnderCommentEl: IUnderSpecialistComment;
  SpecialistUnderCommentData: Pick<IQuery, "fetchUnderSpecialistCommentWithId">;
}

export interface ISpecialistReplyEditPresenterProps {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  specialistUnderCommentsEditContents: string;
  onClickSpecialistUnderCommentEdit: () => void;
  onChangeEditSpecialistUnderComment: (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onClickDeleteSpecialistUnderComment: () => void;
  SpecialistUnderCommentEl: IUnderSpecialistComment;
  SpecialistUnderCommentData: Pick<IQuery, "fetchUnderSpecialistCommentWithId">;
  isReportModalOpen: boolean;
  showReportModal: () => void;
  closeShowReportModal: () => void;
  onClickReportUnderComment: (underCommentId: string) => () => void;
}

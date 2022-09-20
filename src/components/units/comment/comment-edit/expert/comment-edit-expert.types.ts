import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { SetterOrUpdater } from "recoil";
import {
  IQuery,
  ISpecialistComment,
} from "../../../../../commons/types/generated/types";

export interface ICommentEditExpertContainerProps {
  SpecialistCommentEl: ISpecialistComment;
  SpecialistCommentData:
    | Pick<IQuery, "fetchSpecialistCommentsWithStoryId">
    | undefined;
}

export interface ICommentEditExpertPresenterProps {
  isExpertCommentEdit: boolean;
  setIsExpertCommentEdit: SetterOrUpdater<boolean>;
  editSpecialistContents: string;
  onClickExpertEdit: () => void;
  onClickSpecialistDelete: () => void;
  onChangeEditExpertContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  SpecialistCommentEl: ISpecialistComment;
  SpecialistCommentData:
    | Pick<IQuery, "fetchSpecialistCommentsWithStoryId">
    | undefined;
  isSpecialistReply: boolean;
  setIsSpecialistReply: Dispatch<SetStateAction<boolean>>;
  onClickSpecialistReply: () => void;
  isReportModalOpen: boolean;
  showReportModal: () => void;
  closeShowReportModal: () => void;
  onClickReportSpecialistComment: (SpecialistCommentId: string) => () => void;
}

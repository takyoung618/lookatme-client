import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPagePresenterProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  selected: Number | undefined;
  isActive: boolean;
  onChangeSelectedPoint: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClickChargePoint: () => void;
  UserInfo: Pick<IQuery, "fetchLoginUser"> | undefined;
  profileEdit: boolean;
  onClickEditButton: () => void;
  pwdEdit: boolean;
  onClickPwdButton: () => void;
  TicketData: Pick<IQuery, "fetchOwnTickets"> | undefined;
  reviewModalIsOpen: boolean;
  setReviewModalIsOpen: Dispatch<SetStateAction<boolean>>;
  rate: Number;
  textError: string;
  onChangeRate: (rate: SetStateAction<number>) => void;
  onChangeReview: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  reviewIsActive: boolean;
  onClickReviewSubmit: () => void;
}

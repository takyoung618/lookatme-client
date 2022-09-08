import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPagePresenterProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  selected: string;
  isActive: boolean;
  onChangeSelectedPoint: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClickChargePoint: () => void;
  UserInfo: Pick<IQuery, "fetchLoginUser"> | undefined;
}

import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IMyPagePresenterProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  selected: string;
  isActive: boolean;
  onChangeSelectedPoint: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClickChargePoint: () => void;
}

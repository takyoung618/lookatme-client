import { UseFormReturn } from "react-hook-form";

export interface IFindIdProps {
  register: UseFormReturn["register"];
  handleSubmit: UseFormReturn["handleSubmit"];
  formState: UseFormReturn["formState"];
  onClickSendToken: (data: any) => Promise<void>;
  onClickCheckToken: (data: any) => Promise<void>;
  minutes: Number;
  seconds: Number;
  data: any;
  onClickFindId: () => void;
  isOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  onClickMoveToFindPassword: () => void;
}

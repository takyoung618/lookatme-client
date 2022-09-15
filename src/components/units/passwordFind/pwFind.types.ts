import { UseFormReturn } from "react-hook-form";

export interface IFindPwProps {
  register: UseFormReturn["register"];
  handleSubmit: UseFormReturn["handleSubmit"];
  formState: UseFormReturn["formState"];
  onClickSendToken: (data: any) => Promise<void>;
  onClickCheckToken: (data: any) => Promise<void>;
  minutes: Number;
  seconds: Number;
  onClickFindPassword: (data: any) => Promise<void>;
  onClickMoveToFindId: () => void;
}

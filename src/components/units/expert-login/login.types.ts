import { ChangeEvent, MouseEvent } from "react";
import { UseFormReturn } from "react-hook-form";

export interface ILoginUIProps {
  register: UseFormReturn["register"];
  handleSubmit: UseFormReturn["handleSubmit"];
  formState: UseFormReturn["formState"];
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: (data: any) => Promise<void>;
  onClickMoveToSignup: () => void;
  onClickMoveToIdFind: () => void;
  onClickMoveToPasswordFind: () => void;
}

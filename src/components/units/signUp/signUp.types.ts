import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";

export interface ISignUpUIProps {
  register: UseFormReturn["register"];
  handleSubmit: UseFormReturn["handleSubmit"];
  formState: UseFormReturn["formState"];
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword2: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePhoneNumber: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: (data: any) => Promise<void>;
}

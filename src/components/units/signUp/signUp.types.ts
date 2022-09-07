import { UseFormReturn } from "react-hook-form";

export interface ISignUpUIProps {
  register: UseFormReturn["register"];
  handleSubmit: UseFormReturn["handleSubmit"];
  formState: UseFormReturn["formState"];
  onClickSignUp: (data: any) => Promise<void>;
}

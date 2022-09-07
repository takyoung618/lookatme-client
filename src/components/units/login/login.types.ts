import { UseFormReturn } from "react-hook-form";

export interface ILoginUIProps {
  register: UseFormReturn["register"];
  handleSubmit: UseFormReturn["handleSubmit"];
  formState: UseFormReturn["formState"];

  onClickLogin: (data: any) => Promise<void>;
  onClickMoveToSignup: () => void;
  onClickMoveToIdFind: () => void;
  onClickMoveToPasswordFind: () => void;
}

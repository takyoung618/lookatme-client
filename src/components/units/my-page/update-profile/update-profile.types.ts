import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IUpdateProfilePresenterProps {
  UserInfo: Pick<IQuery, "fetchLoginUser"> | undefined;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickProfileEditButton: (data: any) => void;
  onClickBackButton: () => void;
}

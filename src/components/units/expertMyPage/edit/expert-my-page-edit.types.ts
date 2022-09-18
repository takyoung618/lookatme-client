import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IExpertMyPageEditPresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  SpecialistData: Pick<IQuery, "fetchLoginSpecialist"> | undefined;
  onClickUpdateButton: (data: any) => Promise<void>;
}

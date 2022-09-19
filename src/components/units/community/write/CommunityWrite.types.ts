import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICreateStoryProps {
  isEdit: boolean;
  data: Pick<IQuery, "fetchStory"> | undefined;
}

export interface ICommunityWritePresenterProps {
  data: Pick<IQuery, "fetchStory"> | undefined;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickCreate: (data: any) => Promise<void>;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickUpdate: (data: any) => Promise<void>;
  onClickList: () => void;
  onClickToDetail: () => void;
  isEdit: boolean;
  onChangeContents: (value: string) => void;
}

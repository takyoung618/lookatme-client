export interface ICreateUsedItemContainerProps {
    isEdit: boolean;
    data?: Pick<IQuery, "fetchStories">;
}

export interface ICreateUsedItemUIProps {
    onClickList: () => void;
}

export interface ICreatePresenterProps {
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: FormState<FieldValues>;
    onClickWriteButton: (data: any) => void;
    fileUrls: string[];
    onChangeFileUrls: (fileUrl: string, index: number) => void;
    onChangeContents: (value: string) => void;
    onClickAddressSearch: () => void;
    onCompleteAddressSearch: (data: any) => void;
    onClickCloseAddressSearch: () => void;
    isOpen: boolean;
    address: string;
    onClickCancel: () => void;
    isEdit: boolean;
    data: Pick<IQuery, "fetchStories">;
    onClickEditButton: (data: any) => void;
    tags: never[];
    onChangeTags: (value: string) => void;
  }
  


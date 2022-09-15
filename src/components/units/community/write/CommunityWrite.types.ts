import { IQuery } from "../../../../commons/types/generated/types";
// import { Editor } from "@toast-ui/react-editor";

export interface ICreateUsedItemContainerProps {
    isEdit: boolean;
    data?: Pick<IQuery, "fetchStories">;
}

export interface ICreateUsedItemUIProps {
    onClickList: () => void;
}

export interface ICommunityNewUIProps {
    editData?: {
        fetchStory: {
          categoryName: string;
          title: string;
          text: string;
        //   imgUrl: string;
        };
    };

    getHTML(): string;
}

export interface ICreateStoryProps {
    isEdit: boolean;
    data?: Pick<IQuery, "fetchStory">;
  }
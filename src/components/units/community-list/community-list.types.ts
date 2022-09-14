import { IQuery } from "../../../commons/types/generated/types";

export interface ICommunityListPresenterProps {
  total: boolean;
  job: boolean;
  love: boolean;
  person: boolean;
  mySelf: boolean;
  family: boolean;
  free: boolean;
  time: boolean;
  like: boolean;
  comment: boolean;
  onClickTotal: () => void;
  onClickJob: (event: MouseEvent<HTMLDivElement>) => void;
  onClickLove: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPerson: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMySelf: (event: MouseEvent<HTMLDivElement>) => void;
  onClickFamily: (event: MouseEvent<HTMLDivElement>) => void;
  onClickFree: (event: MouseEvent<HTMLDivElement>) => void;
  onClickTime: (event: MouseEvent<HTMLDivElement>) => void;
  onClickLike: (event: MouseEvent<HTMLDivElement>) => void;
  onClickComment: (event: MouseEvent<HTMLDivElement>) => void;
  timeData: Pick<IQuery, "fetchStoriesByTime"> | undefined;
  likeData: Pick<IQuery, "fetchStoriesByLike"> | undefined;
  commentData: Pick<IQuery, "fetchStoriesByComment"> | undefined;
  FetchMoreTimeData: () => void;
  FetchMoreLikeData: () => void;
  FetchMoreCommentData: () => void;
  onClickWriteButton: () => void;
}

export interface ITotalButtonProps {
  total: boolean;
}

export interface IJobButtonProps {
  job: boolean;
}

export interface ILoveButtonProps {
  love: boolean;
}

export interface IPersonButtonProps {
  person: boolean;
}

export interface IMySelfButtonProps {
  mySelf: boolean;
}

export interface IFamilyButtonProps {
  family: boolean;
}

export interface IFreeButtonProps {
  free: boolean;
}

export interface ITimeButtonProps {
  time: boolean;
}

export interface ILikeButtonProps {
  like: boolean;
}

export interface ICommentButtonProps {
  comment: boolean;
}

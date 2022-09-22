import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPagePresenterProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  selected: Number | undefined;
  isActive: boolean;
  onChangeSelectedPoint: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClickChargePoint: () => void;
  UserInfo: Pick<IQuery, "fetchLoginUser"> | undefined;
  profileEdit: boolean;
  onClickEditButton: () => void;
  pwdEdit: boolean;
  onClickPwdButton: () => void;
  TicketData: Pick<IQuery, "fetchOwnTickets"> | undefined;
  FetchMoreTicketData: () => void;
  reviewModalIsOpen: boolean;
  setReviewModalIsOpen: Dispatch<SetStateAction<boolean>>;
  rate: Number;
  textError: string;
  onChangeRate: (rate: SetStateAction<number>) => void;
  onChangeReview: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  reviewIsActive: boolean;
  onClickReviewSubmit: (event: MouseEvent<HTMLDivElement>) => void;
  community: boolean;
  comment: boolean;
  like: boolean;
  communityData: Pick<IQuery, "fetchOwnStories"> | undefined;
  FetchMoreCommunityData: () => void;
  commentData: Pick<IQuery, "fetchOwnComments"> | undefined;
  FetchMoreCommentData: () => void;
  likeData: Pick<IQuery, "fetchOwnLikedStories"> | undefined;
  FetchMoreLikeData: () => void;
  onClickCommunity: () => void;
  onClickComment: () => void;
  onClickLike: () => void;
  onClickMoveToDetailCommunity: (CommunityId: string) => () => void;
  onClickTicket: (event: any) => void;
}

export interface ICommunityProps {
  community: boolean;
}

export interface ICommentProps {
  comment: boolean;
}

export interface ILikeProps {
  like: boolean;
}

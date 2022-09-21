import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityDetailUiProps {
  data: Pick<IQuery, "fetchStory"> | undefined;
  UserInfo: Pick<IQuery, "fetchLoginUser"> | undefined;
  onClickMoveToList: () => void;
  onClickMoveToUpdate: () => void;
  onClickDeleteStory: () => void;
  onClickHeart: () => void;
}

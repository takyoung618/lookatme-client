import { IQuery } from "../../../commons/types/generated/types";

export interface IMainUIProps {
  onClickMoveToExpert: () => void;
  onClickMoveToCommunity: () => void;
  onClickMoveToMyPage: () => void;
  onClickMoveToPostIt: () => void;
  onClickMoveToFAQ: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  data: Pick<IQuery, "fetchBestStories">;
  SpecialListData: Pick<IQuery, "fetchSpecialists">;
  onClickMoveToOfficial: () => void;
}

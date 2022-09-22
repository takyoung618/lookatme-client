import { IQuery } from "../../../../commons/types/generated/types";

export interface IExpertDetailPresenterProps {
  data: Pick<IQuery, "fetchSpecialist"> | undefined;
  onClickBuyTicket: () => void;
  onClickMoveToList: () => void;
  ReviewData:
    | Pick<IQuery, "fetchSpecialistReviewsWithSpecialistId">
    | undefined;
  FetchMoreReview: () => void;
}

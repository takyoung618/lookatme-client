import { IQuery } from "../../../../commons/types/generated/types";

export interface IExpertListPresenterProps {
  time: boolean;
  review: boolean;
  price: boolean;
  timeData: Pick<IQuery, "fetchSpecialists"> | undefined;
  FetchMoreTimeData: () => void;
  reviewData: Pick<IQuery, "fetchSpecialsitByRate"> | undefined;
  FetchMoreReviewData: () => void;
  priceData: Pick<IQuery, "fetchSpecialistByPrice"> | undefined;
  FetchMorePriceData: () => void;
  onClickTime: () => void;
  onClickReview: () => void;
  onClickPrice: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface ITimeButtonProps {
  time: boolean;
}

export interface IReviewButtonProps {
  review: boolean;
}

export interface IPriceButtonProps {
  price: boolean;
}

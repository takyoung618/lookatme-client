export interface IExpertListPresenterProps {
  time: boolean;
  review: boolean;
  price: boolean;
  onClickTime: () => void;
  onClickReview: () => void;
  onClickPrice: () => void;
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

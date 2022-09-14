import { useState } from "react";
import ExpertListUi from "./ExpertList.presenter";

export default function ExpertList() {
  const [time, setTime] = useState(true);
  const [review, setReview] = useState(false);
  const [price, setPrice] = useState(false);

  const onClickTime = () => {
    setTime(true);
    setReview(false);
    setPrice(false);
  };

  const onClickReview = () => {
    setTime(false);
    setReview(true);
    setPrice(false);
  };

  const onClickPrice = () => {
    setTime(false);
    setReview(false);
    setPrice(true);
  };

  return (
    <ExpertListUi
      time={time}
      review={review}
      price={price}
      onClickTime={onClickTime}
      onClickReview={onClickReview}
      onClickPrice={onClickPrice}
    ></ExpertListUi>
  );
}

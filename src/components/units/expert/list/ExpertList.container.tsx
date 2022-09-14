import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import ExpertListUi from "./ExpertList.presenter";
import {
  FETCH_SPECIALISTS,
  FETCH_SPECIALIST_BY_PRICE,
  FETCH_SPECIALSIT_BY_RATE,
} from "./ExpertList.queries";

export default function ExpertList() {
  const router = useRouter();

  const [time, setTime] = useState(true);
  const [review, setReview] = useState(false);
  const [price, setPrice] = useState(false);

  const {
    data: timeData,
    refetch: timeRefetch,
    fetchMore: timeFetchMore,
  } = useQuery<Pick<IQuery, "fetchSpecialists">>(FETCH_SPECIALISTS);

  const FetchMoreTimeData = () => {
    if (!timeData) return;

    timeFetchMore({
      variables: {
        page: Math.ceil(timeData.fetchSpecialists.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchSpecialists) {
          return { fetchSpecialists: [...prev.fetchSpecialists] };
        }

        return {
          fetchSpecialists: [
            ...prev.fetchSpecialists,
            ...fetchMoreResult.fetchSpecialists,
          ],
        };
      },
    });
  };

  const {
    data: reviewData,
    refetch: reviewRefetch,
    fetchMore: reviewFetchMore,
  } = useQuery<Pick<IQuery, "fetchSpecialsitByRate">>(FETCH_SPECIALSIT_BY_RATE);

  const FetchMoreReviewData = () => {
    if (!reviewData) return;

    reviewFetchMore({
      variables: {
        page: Math.ceil(reviewData.fetchSpecialsitByRate.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchSpecialsitByRate) {
          return { fetchSpecialsitByRate: [...prev.fetchSpecialsitByRate] };
        }

        return {
          fetchSpecialsitByRate: [
            ...prev.fetchSpecialsitByRate,
            ...fetchMoreResult.fetchSpecialsitByRate,
          ],
        };
      },
    });
  };

  const {
    data: priceData,
    refetch: priceRefetch,
    fetchMore: priceFetchMore,
  } = useQuery<Pick<IQuery, "fetchSpecialistByPrice">>(
    FETCH_SPECIALIST_BY_PRICE
  );

  const FetchMorePriceData = () => {
    if (!priceData) return;

    priceFetchMore({
      variables: {
        page: Math.ceil(priceData.fetchSpecialistByPrice.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchSpecialistByPrice) {
          return { fetchSpecialistByPrice: [...prev.fetchSpecialistByPrice] };
        }

        return {
          fetchSpecialistByPrice: [
            ...prev.fetchSpecialistByPrice,
            ...fetchMoreResult.fetchSpecialistByPrice,
          ],
        };
      },
    });
  };

  const onClickTime = () => {
    timeRefetch();
    setTime(true);
    setReview(false);
    setPrice(false);
  };

  const onClickReview = () => {
    reviewRefetch();
    setTime(false);
    setReview(true);
    setPrice(false);
  };

  const onClickPrice = () => {
    priceRefetch();
    setTime(false);
    setReview(false);
    setPrice(true);
  };

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/expert/${event.currentTarget.id}`);
  };

  return (
    <ExpertListUi
      time={time}
      review={review}
      price={price}
      timeData={timeData}
      FetchMoreTimeData={FetchMoreTimeData}
      reviewData={reviewData}
      FetchMoreReviewData={FetchMoreReviewData}
      priceData={priceData}
      FetchMorePriceData={FetchMorePriceData}
      onClickTime={onClickTime}
      onClickReview={onClickReview}
      onClickPrice={onClickPrice}
      onClickMoveToDetail={onClickMoveToDetail}
    ></ExpertListUi>
  );
}

import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IQuery,
  IQueryFetchSpecialistArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../my-page/my-page.queries";
import ExpertDetailPresenter from "./expert-detail.presenter";
import {
  CREATE_TICKET,
  FETCH_SPECIALIST,
  FETCH_SPECIALIST_REVIEWS_WITH_SPECIALIST_ID,
} from "./expert-detail.queries";

export default function ExpertDetailContainer() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchSpecialist">,
    IQueryFetchSpecialistArgs
  >(FETCH_SPECIALIST, {
    variables: { id: String(router.query.expertId) },
  });

  const { data: ReviewData, fetchMore: ReviewFetchMore } = useQuery<
    Pick<IQuery, "fetchSpecialistReviewsWithSpecialistId">
  >(FETCH_SPECIALIST_REVIEWS_WITH_SPECIALIST_ID, {
    variables: { specialistId: String(router.query.expertId), page: 0 },
  });

  const FetchMoreReview = () => {
    if (!ReviewData) return;

    ReviewFetchMore({
      variables: {
        page:
          Math.ceil(
            ReviewData?.fetchSpecialistReviewsWithSpecialistId.length / 10
          ) + 1,
      },

      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchSpecialistReviewsWithSpecialistId) {
          return {
            fetchSpecialistReviewsWithSpecialistId: [
              ...prev.fetchSpecialistReviewsWithSpecialistId,
            ],
          };
        }

        return {
          fetchSpecialistReviewsWithSpecialistId: [
            ...prev.fetchSpecialistReviewsWithSpecialistId,
            ...fetchMoreResult.fetchSpecialistReviewsWithSpecialistId,
          ],
        };
      },
    });
  };

  const [createTicket] =
    useMutation<Pick<IMutation, "createTicket">>(CREATE_TICKET);

  const onClickBuyTicket = async () => {
    try {
      await createTicket({
        variables: { specialistId: String(router.query.expertId) },
        refetchQueries: [{ query: FETCH_LOGIN_USER }],
      });
      Modal.success({
        content:
          "상담 신청이 완료되었습니다. 마이페이지에서 전문가 목록을 확인해주세요.",
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickMoveToList = () => {
    router.push("/expert/");
  };

  return (
    <ExpertDetailPresenter
      data={data}
      onClickBuyTicket={onClickBuyTicket}
      onClickMoveToList={onClickMoveToList}
      ReviewData={ReviewData}
      FetchMoreReview={FetchMoreReview}
    ></ExpertDetailPresenter>
  );
}

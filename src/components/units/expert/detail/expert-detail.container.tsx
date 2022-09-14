import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IQuery,
  IQueryFetchSpecialistArgs,
} from "../../../../commons/types/generated/types";
import ExpertDetailPresenter from "./expert-detail.presenter";
import { CREATE_TICKET, FETCH_SPECIALIST } from "./expert-detail.queries";

export default function ExpertDetailContainer() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchSpecialist">,
    IQueryFetchSpecialistArgs
  >(FETCH_SPECIALIST, {
    variables: { id: String(router.query.expertId) },
  });

  const [createTicket] =
    useMutation<Pick<IMutation, "createTicket">>(CREATE_TICKET);

  const onClickBuyTicket = async () => {
    await createTicket({
      variables: { specialistId: String(router.query.id) },
    });
    Modal.success({
      content:
        "상담 신청이 완료되었습니다. 마이페이지에서 전문가 목록을 확인해주세요.",
    });
  };

  const onClickMoveToList = () => {
    router.push("/expert/");
  };

  return (
    <ExpertDetailPresenter
      data={data}
      onClickBuyTicket={onClickBuyTicket}
      onClickMoveToList={onClickMoveToList}
    ></ExpertDetailPresenter>
  );
}

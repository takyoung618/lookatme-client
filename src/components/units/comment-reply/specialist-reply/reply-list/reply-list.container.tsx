import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";
import SpecialistReplyListPresenter from "./reply-list.presenter";
import { FETCH_UNDER_SPECIALIST_COMMENT_WITH_ID } from "./reply-list.queries";
import { ISpecialistReplyListContainerProps } from "./reply-list.types";

export default function SpecialistReplyListContainer(
  props: ISpecialistReplyListContainerProps
) {
  const { data: SpecialistUnderCommentData } = useQuery<
    Pick<IQuery, "fetchUnderSpecialistCommentWithId">
  >(FETCH_UNDER_SPECIALIST_COMMENT_WITH_ID, {
    variables: { specialistCommentId: props.SpecialistCommentEl.id },
  });
  return (
    <SpecialistReplyListPresenter
      SpecialistUnderCommentData={SpecialistUnderCommentData}
    ></SpecialistReplyListPresenter>
  );
}

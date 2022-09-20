import SpecialistReplyEditContainer from "../reply-edit/reply-edit.container";
import { ISpecialistReplyListPresenterProps } from "./reply-list.types";

export default function SpecialistReplyListPresenter(
  props: ISpecialistReplyListPresenterProps
) {
  return (
    <>
      {props.SpecialistUnderCommentData?.fetchUnderSpecialistCommentWithId.map(
        (SpecialistUnderCommentEl) => (
          <SpecialistReplyEditContainer
            key={SpecialistUnderCommentEl.id}
            SpecialistUnderCommentEl={SpecialistUnderCommentEl}
            SpecialistUnderCommentData={props.SpecialistUnderCommentData}
          ></SpecialistReplyEditContainer>
        )
      )}
    </>
  );
}

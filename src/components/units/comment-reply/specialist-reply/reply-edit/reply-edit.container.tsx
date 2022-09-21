import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { IMutation } from "../../../../../commons/types/generated/types";
import { FETCH_UNDER_SPECIALIST_COMMENT_WITH_ID } from "../reply-list/reply-list.queries";
import SpecialistReplyEditPresenter from "./reply-edit.presenter";
import { DELETE_UNDER_SPECIALIST_COMMENT } from "./reply-edit.queries";
import { ISpecialistReplyEditContainerProps } from "./reply-edit.types";

export default function SpecialistReplyEditContainer(
  props: ISpecialistReplyEditContainerProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const [
    specialistUnderCommentsEditContents,
    setSpecialistUnderCommentsEditContents,
  ] = useState("");
  const [, setSpecialistUnderCommentsEditContentsLength] = useState(0);

  const onClickSpecialistUnderCommentEdit = () => {
    setIsEdit(true);
  };

  const [deleteUnderSpecialistComment] = useMutation<
    IMutation,
    "deleteUnderSpecialistComment"
  >(DELETE_UNDER_SPECIALIST_COMMENT);

  const onClickDeleteSpecialistUnderComment = async () => {
    try {
      await deleteUnderSpecialistComment({
        variables: {
          underSpecialistCommentId: props.SpecialistUnderCommentEl.id,
        },
        refetchQueries: [
          {
            query: FETCH_UNDER_SPECIALIST_COMMENT_WITH_ID,
            variables: {
              specialistCommentId:
                props.SpecialistUnderCommentEl.specialistComment.id,
            },
          },
        ],
      });
      message.success("답글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeEditSpecialistUnderComment = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSpecialistUnderCommentsEditContents(event.target.value);
    setSpecialistUnderCommentsEditContentsLength(event.target.value.length);
  };

  return (
    <SpecialistReplyEditPresenter
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      specialistUnderCommentsEditContents={specialistUnderCommentsEditContents}
      onClickSpecialistUnderCommentEdit={onClickSpecialistUnderCommentEdit}
      onChangeEditSpecialistUnderComment={onChangeEditSpecialistUnderComment}
      onClickDeleteSpecialistUnderComment={onClickDeleteSpecialistUnderComment}
      SpecialistUnderCommentEl={props.SpecialistUnderCommentEl}
      SpecialistUnderCommentData={props.SpecialistUnderCommentData}
    ></SpecialistReplyEditPresenter>
  );
}

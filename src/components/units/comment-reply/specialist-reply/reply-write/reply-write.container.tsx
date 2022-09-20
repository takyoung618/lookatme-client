import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation } from "../../../../../commons/types/generated/types";
import { FETCH_UNDER_SPECIALIST_COMMENT_WITH_ID } from "../reply-list/reply-list.queries";
import SpecialistReplyWritePresenter from "./reply-write.presenter";
import {
  CREATE_UNDER_SPECIALIST_COMMENT,
  UPDATE_UNDER_SPECIALIST_COMMENT,
} from "./reply-write.queries";
import { ISpecialistReplyWriteContainer } from "./reply-write.types";

export default function SpecialistReplyWriteContainer(
  props: ISpecialistReplyWriteContainer
) {
  const router = useRouter();

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [contentsLength, setContentsLength] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [createUnderSpecialistComment] = useMutation<
    Pick<IMutation, "createUnderSpecialistComment">
  >(CREATE_UNDER_SPECIALIST_COMMENT);

  const [updateUnderSpecialistComment] = useMutation<
    Pick<IMutation, "updateUnderSpecialistComment">
  >(UPDATE_UNDER_SPECIALIST_COMMENT, {
    variables: {
      updateUnderSpecialistCommentInput: {
        contents,
        underSpecialistCommentId: props.SpecialistUnderCommentEl.id,
      },
    },
  });

  const onChangeSpecialistUnderComment = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContents(event.target.value);
    event.target.value
      ? setContentsError("")
      : setContentsError("답글을 입력해주세요.");
    event.target.value ? setIsActive(true) : setIsActive(false);
    setContentsLength(event.target.value.length);
  };

  const onClickSpecialistUnderComment = async () => {
    contents ? setContentsError("") : setContentsError("답글을 입력해주세요.");

    if (contents) {
      try {
        await createUnderSpecialistComment({
          variables: {
            createUnderSpecialistCommentInput: {
              contents,
              specialistCommentId: props.SpecialistCommentEl.id,
            },
          },
          refetchQueries: [
            {
              query: FETCH_UNDER_SPECIALIST_COMMENT_WITH_ID,
              variables: { specialistCommentId: props.SpecialistCommentEl.id },
            },
          ],
        });
        props.setIsSpecialistReply(false);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdateSpecialistUnderComment = async () => {
    if (!contents) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      await updateUnderSpecialistComment({
        variables: {
          updateSpecialistCommentInput: {
            contents,
            underSpecialistCommentId: props.SpecialistUnderCommentEl.id,
          },
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
      props.setIsEdit(false);
      message.success("답글이 수정되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <SpecialistReplyWritePresenter
      contents={contents}
      contentsLength={contentsLength}
      contentsError={contentsError}
      onChangeSpecialistUnderComment={onChangeSpecialistUnderComment}
      onClickSpecialistUnderComment={onClickSpecialistUnderComment}
      onClickUpdateSpecialistUnderComment={onClickUpdateSpecialistUnderComment}
      isEdit={props.isEdit}
      SpecialistUnderCommentEl={props.SpecialistUnderCommentEl}
    ></SpecialistReplyWritePresenter>
  );
}

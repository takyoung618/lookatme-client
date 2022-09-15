import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IUpdateCommentInput,
} from "../../../../commons/types/generated/types";
import CommentWritePresenter from "./CommentWrite.presenter";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./CommentWrite.queries";

export default function CommentWriteContainer() {
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState("");
  const [commentLength, setCommentLength] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const [createComment] =
    useMutation<Pick<IMutation, "createComment">>(CREATE_COMMENT);

  const [updateComment] =
    useMutation<Pick<IMutation, "updateComment">>(UPDATE_COMMENT);

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    event.target.value
      ? setCommentError("")
      : setCommentError("댓글을 입력해주세요.");
    event.target.value ? setIsActive(true) : setIsActive(false);
    setCommentLength(event.target.value.length);
  };

  const onClickCommentButton = async () => {
    comment ? setCommentError("") : setCommentError("댓글을 입력해주세요.");

    if (comment) {
      try {
        await createComment({
          variables: {
            createCommentInput: {
              text: comment,
              storyId: router.query.communityId,
            },
          },
          // 댓글 목록 fetch
          // refetchQueries: [

          // ]
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
      setComment("");
    }
  };

  const onClickCommentEditButton = async () => {
    if (!comment) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      const updateCommentInput: IUpdateCommentInput = {};
      if (comment) updateCommentInput.text = comment;
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <CommentWritePresenter
      comment={comment}
      commentError={commentError}
      commentLength={commentLength}
      onChangeComment={onChangeComment}
      onClickCommentButton={onClickCommentButton}
      onClickCommentEditButton={onClickCommentEditButton}
    />
  );
}

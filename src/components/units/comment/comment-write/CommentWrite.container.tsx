import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IUpdateCommentInput,
} from "../../../../commons/types/generated/types";
import CommentWritePresenter from "./CommentWrite.presenter";
import {
  CREATE_COMMENT,
  CREATE_SPECIALIST_COMMENT,
  UPDATE_COMMENT,
  UPDATE_SPECIALIST_OWN_COMMENT,
} from "./CommentWrite.queries";
import { getSpecialist } from "../../../../commons/libraries/getSpecialist";
import { FETCH_COMMENTS_WITH_STORY_ID } from "../comment-list/comment-list.queries";
import { useRecoilState } from "recoil";
import { isUserCommentEditState } from "../../../../commons/store";

export default function CommentWriteContainer(props) {
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState("");
  const [commentLength, setCommentLength] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const isSpecialist = getSpecialist();

  const [createComment] =
    useMutation<Pick<IMutation, "createComment">>(CREATE_COMMENT);

  const [updateComment] =
    useMutation<Pick<IMutation, "updateComment">>(UPDATE_COMMENT);

  const [createSpecialistComment] = useMutation<
    Pick<IMutation, "createSpecialistComment">
  >(CREATE_SPECIALIST_COMMENT);

  const [updateSpecialistOwnComment] = useMutation<
    Pick<IMutation, "updateSpecialistOwnComment">
  >(UPDATE_SPECIALIST_OWN_COMMENT);

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    event.target.value
      ? setCommentError("")
      : setCommentError("댓글을 입력해주세요.");
    event.target.value ? setIsActive(true) : setIsActive(false);
    setCommentLength(event.target.value.length);
  };

  const onClickUserCommentButton = async () => {
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
          refetchQueries: [
            {
              query: FETCH_COMMENTS_WITH_STORY_ID,
              variables: { storyId: router.query.communityId },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
      setComment("");
    }
  };

  const onClickUserCommentEditButton = async () => {
    if (!comment) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      const updateUserCommentInput: IUpdateCommentInput = {};
      if (comment) updateUserCommentInput.text = comment;

      await updateComment({
        variables: {
          updateCommentInput: updateUserCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS_WITH_STORY_ID,
            variables: { storyId: router.query.communityId },
          },
        ],
      });
      message.success("댓글이 수정되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickSpecialistCommentButton = async () => {
    comment ? setCommentError("") : setCommentError("댓글을 입력해주세요.");

    if (comment) {
      try {
        await createSpecialistComment({
          variables: {
            createSpecialistCommentInput: {
              text: comment,
              storyId: router.query.communityId,
            },
          },
          // refetchQueries: [
          //   {
          //     query: ,
          //     variables: { storyId: router.query.communityId },
          //   },
          // ],
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
      setComment("");
    }
  };

  const onClickSpecialistCommentEditButton = async () => {
    if (!comment) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      const updateSpecialistCommentInput: IUpdateCommentInput = {};
      if (comment) updateSpecialistCommentInput.text = comment;

      await updateSpecialistOwnComment({
        variables: {
          updateSpecialistCommentInput,
        },
        // refetchQueries: [
        //   {query:
        //   variables: {}}
        // ]
      });
      message.success("댓글이 수정되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <CommentWritePresenter
      isSpecialist={isSpecialist}
      comment={comment}
      commentError={commentError}
      commentLength={commentLength}
      onChangeComment={onChangeComment}
      onClickUserCommentButton={onClickUserCommentButton}
      onClickUserCommentEditButton={onClickUserCommentEditButton}
      onClickSpecialistCommentButton={onClickSpecialistCommentButton}
      onClickSpecialistCommentEditButton={onClickSpecialistCommentEditButton}
      UserCommentEl={props.UserCommentEl}
    />
  );
}

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
import {
  FETCH_COMMENTS_WITH_STORY_ID,
  FETCH_SPECIALIST_COMMENTS_WITH_STORY_ID,
} from "../comment-list/comment-list.queries";
import { ICommentWriteContainerProps } from "./CommentWrite.types";

export default function CommentWriteContainer(
  props: ICommentWriteContainerProps
) {
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const isSpecialist = getSpecialist()?.isSpecialist;

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
    setText(event.target.value);
    event.target.value
      ? setTextError("")
      : setTextError("댓글을 입력해주세요.");
    event.target.value ? setIsActive(true) : setIsActive(false);
    setTextLength(event.target.value.length);
  };

  const onClickUserCommentButton = async () => {
    text ? setTextError("") : setTextError("댓글을 입력해주세요.");

    if (text) {
      try {
        await createComment({
          variables: {
            createCommentInput: {
              text,
              storyId: router.query.communityId,
            },
          },
          refetchQueries: [
            {
              query: FETCH_COMMENTS_WITH_STORY_ID,
              variables: { storyId: router.query.communityId, page: 0 },
            },
          ],
        });
        message.success("댓글 입력이 완료되었습니다.");
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
      setText("");
    }
  };

  const onClickUserCommentEditButton = async () => {
    if (!text) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      await updateComment({
        variables: {
          updateCommentInput: {
            text,
            commentId: props.UserCommentEl?.id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS_WITH_STORY_ID,
            variables: { storyId: router.query.communityId, page: 0 },
          },
        ],
      });
      message.success("댓글이 수정되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickSpecialistCommentButton = async () => {
    text ? setTextError("") : setTextError("댓글을 입력해주세요.");

    if (text) {
      try {
        await createSpecialistComment({
          variables: {
            createSpecialistCommentInput: {
              text,
              storyId: router.query.communityId,
            },
          },
          refetchQueries: [
            {
              query: FETCH_SPECIALIST_COMMENTS_WITH_STORY_ID,
              variables: { storyId: router.query.communityId, page: 0 },
            },
          ],
        });
        message.success("댓글 입력이 완료되었습니다.");
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
      setText("");
    }
  };

  const onClickSpecialistCommentEditButton = async () => {
    if (!text) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      await updateSpecialistOwnComment({
        variables: {
          updateSpecialistCommentInput: {
            text,
            specialistCommentId: props.SpecialistCommentEl.id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_SPECIALIST_COMMENTS_WITH_STORY_ID,
            variables: { storyId: router.query.communityId, page: 0 },
          },
        ],
      });
      message.success("댓글이 수정되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <CommentWritePresenter
      isSpecialist={isSpecialist}
      text={text}
      textError={textError}
      textLength={textLength}
      onChangeComment={onChangeComment}
      onClickUserCommentButton={onClickUserCommentButton}
      onClickUserCommentEditButton={onClickUserCommentEditButton}
      onClickSpecialistCommentButton={onClickSpecialistCommentButton}
      onClickSpecialistCommentEditButton={onClickSpecialistCommentEditButton}
      isExpertCommentEdit={props.isExpertCommentEdit}
      SpecialistCommentEl={props.SpecialistCommentEl}
      isUserCommentEdit={props.isUserCommentEdit}
      UserCommentEl={props.UserCommentEl}
    />
  );
}

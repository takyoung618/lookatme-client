import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getSpecialist } from "../../../../../commons/libraries/getSpecialist";
import { IMutation } from "../../../../../commons/types/generated/types";
import { FETCH_UNDER_COMMENTS_WITH_COMMENT_ID } from "../reply-list/reply-list.queries";
import UserReplyWritePresenter from "./reply-write.presenter";
import {
  CREATE_UNDER_COMMENT,
  UPDATE_OWN_UNDER_COMMENT,
} from "./reply-write.queries";
import { IUserReplyWriteContainerProps } from "./reply-write.types";

export default function UserReplyWriteContainer(
  props: IUserReplyWriteContainerProps
) {
  const router = useRouter();

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [contentsLength, setContentsLength] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const isSpecialist = getSpecialist()?.isSpecialist;

  const [createUnderComment] =
    useMutation<Pick<IMutation, "createUnderComment">>(CREATE_UNDER_COMMENT);

  const [updateOwnUnderComment] = useMutation<
    Pick<IMutation, "updateOwnUnderComment">
  >(UPDATE_OWN_UNDER_COMMENT, {
    variables: {
      updateUnderCommentInput: {
        contents,
        underCommentId: props.UserUnderCommentEl.id,
      },
    },
  });

  const onChangeUnderComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    event.target.value
      ? setContentsError("")
      : setContentsError("답글을 입력해주세요.");
    event.target.value ? setIsActive(true) : setIsActive(false);
    setContentsLength(event.target.value.length);
  };

  const onClickUserUnderComment = async () => {
    contents ? setContentsError("") : setContentsError("답글을 입력해주세요.");

    if (contents) {
      try {
        await createUnderComment({
          variables: {
            createUnderCommentInput: {
              contents,
              commentId: props.UserCommentEl.id,
            },
          },
          refetchQueries: [
            {
              query: FETCH_UNDER_COMMENTS_WITH_COMMENT_ID,
              variables: { commentId: props.UserCommentEl.id },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdateUserUnderComment = async () => {
    if (!contents) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      await updateOwnUnderComment({
        variables: {
          updateUnderCommentInput: {
            contents,
            underCommentId: props.UserUnderCommentEl.id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_UNDER_COMMENTS_WITH_COMMENT_ID,
            variables: {
              commentId: props.UserUnderCommentEl.comment.id,
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
    <UserReplyWritePresenter
      contents={contents}
      contentsLength={contentsLength}
      contentsError={contentsError}
      onChangeUnderComment={onChangeUnderComment}
      onClickUserUnderComment={onClickUserUnderComment}
      UserUnderCommentEl={props.UserUnderCommentEl}
      isEdit={props.isEdit}
      onClickUpdateUserUnderComment={onClickUpdateUserUnderComment}
    ></UserReplyWritePresenter>
  );
}

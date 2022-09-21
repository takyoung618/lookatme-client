import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { IMutation } from "../../../../../commons/types/generated/types";
import { FETCH_UNDER_COMMENTS_WITH_COMMENT_ID } from "../reply-list/reply-list.queries";
import UserReplyEditPresenter from "./reply-edit.presenter";
import { DELETE_OWN_UNDER_COMMENT } from "./reply-edit.queries";
import { IUserReplyEditContainerProps } from "./reply-edit.types";

export default function UserReplyEditContainer(
  props: IUserReplyEditContainerProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const [userUnderCommentsEditContents, setUserUnderCommentsEditContents] =
    useState("");
  const [
    userUnderCommentsEditContentsLength,
    setUserUnderCommentsEditContentsLength,
  ] = useState(0);

  const onClickUserUnderCommentEdit = () => {
    setIsEdit(true);
  };

  const [deleteOwnUnderComment] = useMutation<
    Pick<IMutation, "deleteOwnUnderComment">
  >(DELETE_OWN_UNDER_COMMENT);

  const onClickDeleteUserUnderComment = async () => {
    try {
      await deleteOwnUnderComment({
        variables: {
          underCommentId: props.UserUnderCommentEl.id,
        },
        refetchQueries: [
          {
            query: FETCH_UNDER_COMMENTS_WITH_COMMENT_ID,
            variables: { commentId: props.UserUnderCommentEl?.comment.id },
          },
        ],
      });
      message.success("답글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeEditUserUnderComment = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUserUnderCommentsEditContents(event.target.value);
    setUserUnderCommentsEditContentsLength(event.target.value.length);
  };

  return (
    <UserReplyEditPresenter
      UserUnderCommentEl={props.UserUnderCommentEl}
      UserUnderCommentData={props.UserUnderCommentData}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      userUnderCommentsEditContents={userUnderCommentsEditContents}
      onClickUserUnderCommentEdit={onClickUserUnderCommentEdit}
      onClickDeleteUserUnderComment={onClickDeleteUserUnderComment}
      onChangeEditUserUnderComment={onChangeEditUserUnderComment}
    ></UserReplyEditPresenter>
  );
}

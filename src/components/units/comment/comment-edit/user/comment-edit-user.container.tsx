import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../../commons/libraries/getUserInfo";
import { isUserCommentEditState } from "../../../../../commons/store";
import { IMutation } from "../../../../../commons/types/generated/types";
import { FETCH_COMMENTS_WITH_STORY_ID } from "../../comment-list/comment-list.queries";
import CommentEditUserPresenter from "./comment-edit-user.presenter";
import { DELETE_OWN_COMMENT } from "./comment-edit-user.queries";
import { ICommentEditUserContainer } from "./comment-edit-user.types";

export default function CommentEditUserContainer(
  props: ICommentEditUserContainer
) {
  const router = useRouter();

  const userInfo = getUserInfo();

  const [isUserCommentEdit, setIsUserCommentEdit] = useRecoilState(
    isUserCommentEditState
  );
  const [editUserContents, setEditUserContents] = useState("");
  const [editUserContentsLength, setEditUserContentsLength] = useState(0);

  const onClickUserEdit = () => {
    setIsUserCommentEdit(true);
  };

  const onChangeEditUserContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditUserContents(event.target.value);
    setEditUserContentsLength(event.target.value.length);
  };

  const [deleteOwnComment] =
    useMutation<Pick<IMutation, "deleteOwnComment">>(DELETE_OWN_COMMENT);

  const onClickUserDelete = async () => {
    try {
      await deleteOwnComment({
        variables: {
          id: props.UserCommentEl.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS_WITH_STORY_ID,
            variables: { storyId: router.query.communityId },
          },
        ],
      });
      message.success("댓글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <CommentEditUserPresenter
      isUserCommentEdit={isUserCommentEdit}
      setIsUserCommentEdit={setIsUserCommentEdit}
      editUserContents={editUserContents}
      onClickUserEdit={onClickUserEdit}
      onClickUserDelete={onClickUserDelete}
      UserCommentEl={props.UserCommentEl}
      UserCommentData={props.UserCommentData}
      userInfo={userInfo}
    ></CommentEditUserPresenter>
  );
}

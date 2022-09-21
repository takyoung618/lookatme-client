import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation } from "../../../../../commons/types/generated/types";
import { FETCH_SPECIALIST_COMMENTS_WITH_STORY_ID } from "../../comment-list/comment-list.queries";
import CommentEditExpertPresenter from "./comment-edit-expert.presenter";
import { DELETE_SPECIALIST_OWN_COMMENT } from "./comment-edit-expert.queries";
import { ICommentEditExpertContainerProps } from "./comment-edit-expert.types";

export default function CommentEditExpertContainer(
  props: ICommentEditExpertContainerProps
) {
  const router = useRouter();

  const [isExpertCommentEdit, setIsExpertCommentEdit] = useState(false);
  const [editSpecialistContents, setIsEditSpecialistContents] = useState("");
  const [, setIsEditSpecialistContentsLength] = useState(0);

  const [isSpecialistReply, setIsSpecialistReply] = useState(false);

  const [deleteSpecialistOwnComment] = useMutation<
    Pick<IMutation, "deleteSpecialistOwnComment">
  >(DELETE_SPECIALIST_OWN_COMMENT);

  const onClickExpertEdit = () => {
    setIsExpertCommentEdit(true);
  };

  const onClickSpecialistDelete = async () => {
    try {
      await deleteSpecialistOwnComment({
        variables: {
          specialistCommentId: props.SpecialistCommentEl.id,
        },
        refetchQueries: [
          {
            query: FETCH_SPECIALIST_COMMENTS_WITH_STORY_ID,
            variables: { storyId: router.query.communityId },
          },
        ],
      });
      message.success("댓글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeEditExpertContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIsEditSpecialistContents(event.target.value);
    setIsEditSpecialistContentsLength(event.target.value.length);
  };

  const onClickSpecialistReply = () => {
    setIsSpecialistReply(true);
  };

  return (
    <CommentEditExpertPresenter
      isExpertCommentEdit={isExpertCommentEdit}
      setIsExpertCommentEdit={setIsExpertCommentEdit}
      editSpecialistContents={editSpecialistContents}
      onClickExpertEdit={onClickExpertEdit}
      onClickSpecialistDelete={onClickSpecialistDelete}
      onChangeEditExpertContents={onChangeEditExpertContents}
      SpecialistCommentEl={props.SpecialistCommentEl}
      SpecialistCommentData={props.SpecialistCommentData}
      isSpecialistReply={isSpecialistReply}
      setIsSpecialistReply={setIsSpecialistReply}
      onClickSpecialistReply={onClickSpecialistReply}
    ></CommentEditExpertPresenter>
  );
}

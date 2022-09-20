import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { isExpertCommentEditState } from "../../../../../commons/store";
import { IMutation } from "../../../../../commons/types/generated/types";
import { FETCH_SPECIALIST_COMMENTS_WITH_STORY_ID } from "../../comment-list/comment-list.queries";
import CommentEditExpertPresenter from "./comment-edit-expert.presenter";
import {
  DELETE_SPECIALIST_OWN_COMMENT,
  LIKE_COMMENT,
  REPORT_SPECIALIST_COMMENT,
} from "./comment-edit-expert.queries";
import { ICommentEditExpertContainerProps } from "./comment-edit-expert.types";

export default function CommentEditExpertContainer(
  props: ICommentEditExpertContainerProps
) {
  const router = useRouter();

  const [isExpertCommentEdit, setIsExpertCommentEdit] = useRecoilState(
    isExpertCommentEditState
  );
  const [editSpecialistContents, setIsEditSpecialistContents] = useState("");
  const [editSpecialistContentsLength, setIsEditSpecialistContentsLength] =
    useState(0);

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

  const [reportSpecialistComment] = useMutation<
    Pick<IMutation, "reportSpecialistComment">
  >(REPORT_SPECIALIST_COMMENT);

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const showReportModal = () => {
    setIsReportModalOpen(true);
  };

  const closeShowReportModal = () => {
    setIsReportModalOpen(false);
  };

  const onClickReportSpecialistComment =
    (SpecialistCommentId: string) => async () => {
      try {
        await reportSpecialistComment({
          variables: { specialistCommentId: SpecialistCommentId },
        });
        setIsReportModalOpen(false);
        message.success("신고가 완료되었습니다.");
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
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
      isReportModalOpen={isReportModalOpen}
      showReportModal={showReportModal}
      closeShowReportModal={closeShowReportModal}
      onClickReportSpecialistComment={onClickReportSpecialistComment}
    ></CommentEditExpertPresenter>
  );
}

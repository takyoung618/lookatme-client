import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { isExpertCommentEditState } from "../../../../../commons/store";
import { IMutation } from "../../../../../commons/types/generated/types";
import CommentEditExpertPresenter from "./comment-edit-expert.presenter";
import { DELETE_SPECIALIST_OWN_COMMENT } from "./comment-edit-expert.queries";

export default function CommentEditExpertContainer() {
  const [isExpertCommentEdit, setIsExpertCommentEdit] = useRecoilState(
    isExpertCommentEditState
  );
  const [editExpertContents, setEditExpertContents] = useState("");
  const [editExpertContentsLength, setEditExpertContentsLength] = useState(0);

  const onClickExpertEdit = () => {
    setIsExpertCommentEdit(true);
  };

  const onChangeEditExpertContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditExpertContents(event.target.value);
    setEditExpertContentsLength(event.target.value.length);
  };

  const [deleteSpecialistOwnComment] = useMutation<
    Pick<IMutation, "deleteSpecialistOwnComment">
  >(DELETE_SPECIALIST_OWN_COMMENT);

  // const onClickExpertDelete = async() => {
  //   try{
  //     await deleteSpecialistOwnComment({
  //       variables: {
  //         specialistCommentId:
  //       }
  //     })
  //   } catch(error) {
  //     if(error instanceof Error) Modal.error({content: error.message})
  //   }

  // }

  return <CommentEditExpertPresenter></CommentEditExpertPresenter>;
}

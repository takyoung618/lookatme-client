import * as S from "./reply-edit.styles";
import {
  BsFillPersonFill,
  BsFillPencilFill,
  BsArrowReturnRight,
} from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { ISpecialistReplyEditPresenterProps } from "./reply-edit.types";
import SpecialistReplyWriteContainer from "../reply-write/reply-write.container";
import { BeforeDate } from "../../../../../commons/libraries/utils";
import { Modal } from "antd";

export default function SpecialistReplyEditPresenter(
  props: ISpecialistReplyEditPresenterProps
) {
  return (
    <>
      {!props.isEdit && (
        <S.CommentBodyWrapper>
          <S.CommentWrapper>
            <S.UserWrapper>
              <BsArrowReturnRight
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <S.UserInfoWrapper>
                <BsFillPersonFill
                  style={{
                    width: "27px",
                    height: "23px",
                    color: "#73bea8",
                  }}
                />
                <S.NickNameUser>
                  {props.SpecialistUnderCommentEl.user.nickname}
                </S.NickNameUser>
              </S.UserInfoWrapper>
              <S.TimeWrapper>
                <S.Time>
                  {BeforeDate(props.SpecialistUnderCommentEl.createdAt)}
                </S.Time>
              </S.TimeWrapper>
            </S.UserWrapper>
            <S.CommentBody>
              {props.SpecialistUnderCommentEl.contents}
            </S.CommentBody>
          </S.CommentWrapper>
          <S.FooterWrapper>
            <S.BottomRightWrapper>
              <BsFillPencilFill
                style={{
                  width: "23%",
                  height: "17px",
                  marginRight: "2%",
                  cursor: "pointer",
                }}
                onClick={props.onClickSpecialistUnderCommentEdit}
              />
              <AiFillDelete
                style={{
                  width: "25%",
                  height: "23px",
                  marginRight: "5%",
                  color: "#808080",
                  cursor: "pointer",
                }}
                onClick={props.onClickDeleteSpecialistUnderComment}
              />
              <S.SirenWrapper onClick={props.showReportModal}>
                <img src="/사이렌.png" />
              </S.SirenWrapper>
            </S.BottomRightWrapper>
            <Modal
              open={props.isReportModalOpen}
              onOk={props.onClickReportUnderComment(
                props.SpecialistUnderCommentEl.id
              )}
              onCancel={props.closeShowReportModal}
            >
              <p>댓글을 신고하시겠습니까?</p>
            </Modal>
          </S.FooterWrapper>
        </S.CommentBodyWrapper>
      )}
      {props.isEdit && (
        <SpecialistReplyWriteContainer
          SpecialistUnderCommentEl={props.SpecialistUnderCommentEl}
          setIsEdit={props.setIsEdit}
          isEdit={props.isEdit}
        ></SpecialistReplyWriteContainer>
      )}
    </>
  );
}

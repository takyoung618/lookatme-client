import * as S from "./comment-edit-expert.styles";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillPersonFill, BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { ICommentEditExpertPresenterProps } from "./comment-edit-expert.types";
import { BeforeDate } from "../../../../../commons/libraries/utils";
import CommentWriteContainer from "../../comment-write/CommentWrite.container";
import SpecialistReplyWriteContainer from "../../../comment-reply/specialist-reply/reply-write/reply-write.container";
import SpecialistReplyListContainer from "../../../comment-reply/specialist-reply/reply-list/reply-list.container";
import { Modal } from "antd";

export default function CommentEditExpertPresenter(
  props: ICommentEditExpertPresenterProps
) {
  return (
    <>
      {!props.isExpertCommentEdit && (
        <S.CommentBodyWrapper>
          <S.CommentWrapper>
            <S.UserWrapper>
              <S.UserInfoWrapper>
                <BsFillPersonFill
                  style={{
                    width: "27px",
                    height: "23px",
                    color: "#00428d",
                  }}
                />
                <S.NickNameUser>
                  {props.SpecialistCommentEl.specialist.name}
                </S.NickNameUser>
              </S.UserInfoWrapper>
              <S.TimeWrapper>
                <S.Time>
                  {BeforeDate(props.SpecialistCommentEl.createdAt)}
                </S.Time>
              </S.TimeWrapper>
            </S.UserWrapper>
            <S.CommentBody>{props.SpecialistCommentEl.text}</S.CommentBody>
          </S.CommentWrapper>
          <S.FooterWrapper>
            <S.SympathyWrapper>
              <S.Comment onClick={props.onClickSpecialistReply}>
                답글 쓰기
              </S.Comment>
            </S.SympathyWrapper>
            <S.BottomRightWrapper>
              <BsFillPencilFill
                style={{
                  width: "23%",
                  height: "17px",
                  marginRight: "2%",
                  cursor: "pointer",
                }}
                onClick={props.onClickExpertEdit}
              />
              <AiFillDelete
                style={{
                  width: "25%",
                  height: "23px",
                  marginRight: "5%",
                  color: "#808080",
                  cursor: "pointer",
                }}
                onClick={props.onClickSpecialistDelete}
              />
              <S.SirenWrapper onClick={props.showReportModal}>
                <img src="/사이렌.png" />
              </S.SirenWrapper>
            </S.BottomRightWrapper>
            <Modal
              open={props.isReportModalOpen}
              onOk={props.onClickReportSpecialistComment(
                props.SpecialistCommentEl.id
              )}
              onCancel={props.closeShowReportModal}
            >
              <p>댓글을 신고하시겠습니까?</p>
            </Modal>
          </S.FooterWrapper>
        </S.CommentBodyWrapper>
      )}

      {props.isExpertCommentEdit && (
        <CommentWriteContainer
          isExpertCommentEdit={true}
          setIsExpertCommentEdit={props.setIsExpertCommentEdit}
          SpecialistCommentEl={props.SpecialistCommentEl}
        ></CommentWriteContainer>
      )}

      {props.isSpecialistReply && (
        <SpecialistReplyWriteContainer
          SpecialistCommentEl={props.SpecialistCommentEl}
          setIsSpecialistReply={props.setIsSpecialistReply}
        ></SpecialistReplyWriteContainer>
      )}
      <SpecialistReplyListContainer
        SpecialistCommentEl={props.SpecialistCommentEl}
      ></SpecialistReplyListContainer>
    </>
  );
}

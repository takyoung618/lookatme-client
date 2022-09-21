import * as S from "./comment-edit-user.styles";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillPersonFill, BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { ICommentEditUserPresenter } from "./comment-edit-user.types";
import { BeforeDate } from "../../../../../commons/libraries/utils";
import CommentWriteContainer from "../../comment-write/CommentWrite.container";
import UserReplyListContainer from "../../../comment-reply/user-reply/reply-list/reply-list.container";
import UserReplyWriteContainer from "../../../comment-reply/user-reply/reply-write/reply-write.container";
import { Modal } from "antd";

export default function CommentEditUserPresenter(
  props: ICommentEditUserPresenter
) {
  return (
    <>
      {!props.isUserCommentEdit && (
        <S.CommentBodyWrapper>
          <S.CommentWrapper>
            <S.UserWrapper>
              <S.UserInfoWrapper>
                <BsFillPersonFill
                  style={{
                    width: "27px",
                    height: "23px",
                    color: "#73bea8",
                  }}
                />
                <S.NickNameUser>
                  {props.UserCommentEl.user.nickname}
                </S.NickNameUser>
              </S.UserInfoWrapper>
              <S.TimeWrapper>
                <S.Time>{BeforeDate(props.UserCommentEl.createdAt)}</S.Time>
              </S.TimeWrapper>
            </S.UserWrapper>
            <S.CommentBody>{props.UserCommentEl.text}</S.CommentBody>
          </S.CommentWrapper>
          <S.FooterWrapper>
            <S.SympathyWrapper>
              <S.Comment onClick={props.onClickUserReply}>답글 쓰기</S.Comment>
              <FaHeartbeat
                style={{
                  width: "20%",
                  height: "23px",
                  color: "#73bea8",
                  cursor: "pointer",
                }}
                id={props.UserCommentEl.id}
                onClick={props.onClickLikeComment}
              />
              <S.Sympathy>{props.UserCommentEl.likes}명 공감</S.Sympathy>
            </S.SympathyWrapper>
            <S.BottomRightWrapper>
              <BsFillPencilFill
                style={{
                  width: "23%",
                  height: "17px",
                  marginRight: "10%",
                  cursor: "pointer",
                }}
                onClick={props.onClickUserEdit}
              />
              <AiFillDelete
                style={{
                  width: "25%",
                  height: "23px",
                  marginRight: "5%",
                  color: "#808080",
                  cursor: "pointer",
                }}
                onClick={props.onClickUserDelete}
              />
            </S.BottomRightWrapper>
          </S.FooterWrapper>
        </S.CommentBodyWrapper>
      )}

      {props.isUserCommentEdit && (
        <CommentWriteContainer
          isUserCommentEdit={true}
          setIsUserCommentEdit={props.setIsUserCommentEdit}
          UserCommentEl={props.UserCommentEl}
        ></CommentWriteContainer>
      )}

      {props.isUserReply && (
        <UserReplyWriteContainer
          UserCommentEl={props.UserCommentEl}
          setIsUnderReply={props.setIsUserReply}
        ></UserReplyWriteContainer>
      )}
      <UserReplyListContainer
        UserCommentEl={props.UserCommentEl}
      ></UserReplyListContainer>
    </>
  );
}

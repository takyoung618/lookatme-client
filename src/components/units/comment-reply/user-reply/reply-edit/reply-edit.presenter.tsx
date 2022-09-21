import * as S from "./reply-edit.styles";
import {
  BsFillPersonFill,
  BsFillPencilFill,
  BsArrowReturnRight,
} from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { IUserReplyEditPresenterProps } from "./reply-edit.types";
import UserReplyWriteContainer from "../reply-write/reply-write.container";
import { BeforeDate } from "../../../../../commons/libraries/utils";
import { Modal } from "antd";

export default function UserReplyEditPresenter(
  props: IUserReplyEditPresenterProps
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
                  {props.UserUnderCommentEl.user.nickname}
                </S.NickNameUser>
              </S.UserInfoWrapper>
              <S.TimeWrapper>
                <S.Time>
                  {BeforeDate(props.UserUnderCommentEl.createdAt)}
                </S.Time>
              </S.TimeWrapper>
            </S.UserWrapper>
            <S.CommentBody>{props.UserUnderCommentEl.contents}</S.CommentBody>
          </S.CommentWrapper>
          <S.FooterWrapper>
            <S.BottomRightWrapper>
              <BsFillPencilFill
                style={{
                  width: "23%",
                  height: "17px",
                  marginRight: "13%",
                  cursor: "pointer",
                }}
                onClick={props.onClickUserUnderCommentEdit}
              />
              <AiFillDelete
                style={{
                  width: "25%",
                  height: "23px",
                  marginRight: "10%",
                  color: "#808080",
                  cursor: "pointer",
                }}
                onClick={props.onClickDeleteUserUnderComment}
              />
            </S.BottomRightWrapper>
          </S.FooterWrapper>
        </S.CommentBodyWrapper>
      )}

      {props.isEdit && (
        <UserReplyWriteContainer
          UserUnderCommentEl={props.UserUnderCommentEl}
          setIsEdit={props.setIsEdit}
          isEdit={props.isEdit}
        ></UserReplyWriteContainer>
      )}
    </>
  );
}

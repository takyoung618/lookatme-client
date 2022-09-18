import * as S from "./comment-edit-expert.styles";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillPersonFill, BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { ICommentEditExpertPresenterProps } from "./comment-edit-expert.types";
import { BeforeDate } from "../../../../../commons/libraries/utils";
import CommentWriteContainer from "../../comment-write/CommentWrite.container";

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
              <FaHeartbeat
                style={{
                  width: "20%",
                  height: "23px",
                  color: "#73bea8",
                }}
              />
              <S.Sympathy>0명 공감</S.Sympathy>
              <S.Comment>답글 쓰기</S.Comment>
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
              <S.SirenWrapper>
                <img src="/사이렌.png" />
              </S.SirenWrapper>
            </S.BottomRightWrapper>
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
    </>
  );
}

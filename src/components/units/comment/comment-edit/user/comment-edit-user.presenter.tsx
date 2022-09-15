import * as S from "./comment-edit-user.styles";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillPersonFill, BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

export default function CommentEditUserPresenter() {
  return (
    <>
      <S.HeaderWrapper>
        <S.UserHeader>일반 댓글</S.UserHeader>
      </S.HeaderWrapper>
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
              <S.NickNameUser>닉네임</S.NickNameUser>
            </S.UserInfoWrapper>
            <S.TimeWrapper>
              <S.Time>5분전</S.Time>
            </S.TimeWrapper>
          </S.UserWrapper>
          <S.CommentBody>
            댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
          </S.CommentBody>
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
            />
            <AiFillDelete
              style={{
                width: "25%",
                height: "23px",
                marginRight: "5%",
                color: "#808080",
                cursor: "pointer",
              }}
            />
            <S.SirenWrapper>
              <img src="/사이렌.png" />
            </S.SirenWrapper>
          </S.BottomRightWrapper>
        </S.FooterWrapper>
      </S.CommentBodyWrapper>
    </>
  );
}

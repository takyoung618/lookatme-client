import BasicButton from "../../../commons/button";
import { getDate } from "../../../../../src/commons/libraries/utils";
import * as S from "./CommunityDetail.styles";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import CommentListContainer from "../../comment/comment-list/comment-list.container";
import CommentWriteContainer from "../../comment/comment-write/CommentWrite.container";
import Dompurify from "dompurify";

export default function CommunityDetailUi(props) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.TitleWrapper>
          <S.Title>{props.data?.fetchStory.category.name}</S.Title>
          <S.TimeWrapper>
            <S.Circle></S.Circle>
            <S.Time>{getDate(props.data?.fetchStory.createAt)}</S.Time>
          </S.TimeWrapper>
        </S.TitleWrapper>
      </S.HeaderWrapper>

      <S.TextBoxWrapper>
        <S.TextTitle>{props.data?.fetchStory.title}</S.TextTitle>
        {typeof window !== "undefined" && (
          <S.Text
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchStory.text),
            }}
          ></S.Text>
        )}
        <S.ImageWrapper>
          {props.data?.fetchStory.storyImage
            ?.filter((el: any) => el.url)
            .map((el: any, index: number) => (
              <S.DetailImage key={el} src={`${el.url}`} />
            ))}
        </S.ImageWrapper>
      </S.TextBoxWrapper>
      <S.FooterWrapper>
        <S.SympathyWrapper>
          <FaHeartbeat
            onClick={props.onClickHeart}
            style={{
              width: "27px",
              height: "23px",
              color: "#73bea8",
              marginRight: "5px",
              cursor: "pointer",
            }}
          />
          <S.Sympathy>{props.data?.fetchStory.likes}명 공감</S.Sympathy>
          <S.Comment>댓글 {props.data?.fetchStory.commentCounts}개</S.Comment>
        </S.SympathyWrapper>
        <S.UserWrapper>
          <BsFillPersonFill
            style={{
              width: "27px",
              height: "23px",
              color: "#73bea8",
            }}
          />
          <S.NickNameUser>
            {props.data?.fetchStory.user.nickname}
          </S.NickNameUser>
        </S.UserWrapper>
      </S.FooterWrapper>

      <S.ButtonWrapper>
        <BasicButton
          onClick={props.onClickMoveToList}
          title="목록으로"
        ></BasicButton>
        <BasicButton
          title="수정하기"
          onClick={props.onClickMoveToUpdate}
        ></BasicButton>
        <BasicButton
          title="삭제하기"
          onClick={props.onClickDeleteStory}
        ></BasicButton>
      </S.ButtonWrapper>

      <CommentWriteContainer></CommentWriteContainer>

      <CommentListContainer></CommentListContainer>
    </S.Wrapper>
  );
}

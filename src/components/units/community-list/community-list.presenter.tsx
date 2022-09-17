import * as S from "./community-list.styles";
import { ICommunityListPresenterProps } from "./community-list.types";
import TimeList from "./time-list";
import LikeList from "./like-list";
import CommentList from "./comment-list";


export default function CommunityListPresenter(
  props: ICommunityListPresenterProps
) {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.TotalButton onClick={props.onClickTotal} total={props.total}>
          전체
        </S.TotalButton>
        <S.JobButton id="직업,진로" onClick={props.onClickJob} job={props.job}>
          직업,진로
        </S.JobButton>
        <S.LoveButton
          id="연애,결혼"
          onClick={props.onClickLove}
          love={props.love}
        >
          연애,결혼
        </S.LoveButton>
        <S.PersonButton
          id="대인관계"
          onClick={props.onClickPerson}
          person={props.person}
        >
          대인관계
        </S.PersonButton>
        <S.MySelfButton
          id="자아,성격"
          onClick={props.onClickMySelf}
          mySelf={props.mySelf}
        >
          자아,성격
        </S.MySelfButton>
        <S.FamilyButton
          id="가족"
          onClick={props.onClickFamily}
          family={props.family}
        >
          가족
        </S.FamilyButton>
        <S.FreeButton
          id="자유주제"
          onClick={props.onClickFree}
          free={props.free}
        >
          자유주제
        </S.FreeButton>
      </S.ButtonWrapper>

      <S.FilterWrapper>
        <S.TimeFilterButton onClick={props.onClickTime} time={props.time}>
          시간순
        </S.TimeFilterButton>
        <S.LikeFilterButton onClick={props.onClickLike} like={props.like}>
          좋아요순
        </S.LikeFilterButton>
        <S.CommentFilterButton
          onClick={props.onClickComment}
          comment={props.comment}
        >
          댓글순
        </S.CommentFilterButton>
      </S.FilterWrapper>

      <S.ListWrapper>
        {props.time && (
          <TimeList
            timeData={props.timeData}
            FetchMoreTimeData={props.FetchMoreTimeData}
          ></TimeList>
        )}

        {props.like && (
          <LikeList
            likeData={props.likeData}
            FetchMoreLikeData={props.FetchMoreLikeData}
          ></LikeList>
        )}

        {props.comment && (
          <CommentList
            commentData={props.commentData}
            FetchMoreCommentData={props.FetchMoreCommentData}
          ></CommentList>
        )}
      </S.ListWrapper>

      <S.WriteButtonWrapper>
        <S.WriteButton onClick={props.onClickWriteButton}>
          작성하기
        </S.WriteButton>
      </S.WriteButtonWrapper>
    </S.Wrapper>
  );
}

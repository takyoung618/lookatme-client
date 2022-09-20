import BasicButton from "../../commons/button";
import * as S from "./ExpertMyPage.styles";
import { FaHeartbeat } from "react-icons/fa";
import { IExpertMyPageUIProps } from "./ExpertMyPage.types";
import { getDate } from "../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";

export default function ExpertMyPageUI(props: IExpertMyPageUIProps) {
  return (
    <S.Wrapper>
      <S.Header>전문가 마이페이지</S.Header>
      <S.SpecialistWrapper>
        <S.Image
          src={
            props.SpecialistData?.fetchLoginSpecialist.imgUrl
              ? props.SpecialistData?.fetchLoginSpecialist.imgUrl
              : "/expert-profile.png/"
          }
        ></S.Image>
        <S.ProfileWrapper>
          <S.Title>계정</S.Title>
          <S.Contents>
            {props.SpecialistData?.fetchLoginSpecialist.account}
          </S.Contents>
        </S.ProfileWrapper>
        <S.ProfileWrapper>
          <S.Title>이름</S.Title>
          <S.Contents>
            {props.SpecialistData?.fetchLoginSpecialist.name}
          </S.Contents>
        </S.ProfileWrapper>
        <S.ProfileWrapper>
          <S.Title>요약</S.Title>
          <S.Contents>
            {props.SpecialistData?.fetchLoginSpecialist.summary}
          </S.Contents>
        </S.ProfileWrapper>
        <S.SummaryWrapper>
          <S.Title>소개</S.Title>
          <S.Contents>
            {props.SpecialistData?.fetchLoginSpecialist.introduction}
          </S.Contents>
        </S.SummaryWrapper>
        <S.ProfileWrapper>
          <S.Title>약력</S.Title>
          <S.Contents>
            {props.SpecialistData?.fetchLoginSpecialist.career}
          </S.Contents>
        </S.ProfileWrapper>
        <S.ProfileWrapper>
          <S.Title>가격</S.Title>
          <S.Contents>
            {props.SpecialistData?.fetchLoginSpecialist.price.toLocaleString()}
            원
          </S.Contents>
        </S.ProfileWrapper>
      </S.SpecialistWrapper>

      <S.ButtonWrapper>
        <BasicButton
          title="프로필 수정"
          onClick={props.onClickEditProfile}
        ></BasicButton>
      </S.ButtonWrapper>

      <S.ListTitle>상담회원 목록</S.ListTitle>
      <S.ProgressListWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreCustomerData}
          hasMore={true}
          useWindow={false}
        >
          {props.customerData?.fetchSpecialistOwnCustomer.map((el) => (
            <S.ProgressBody key={el.id} id={el.id}>
              <S.TextBody>
                <S.ProgressContentsWrapper>
                  <S.ProgressNickNameTitle>닉네임 </S.ProgressNickNameTitle>
                  <S.ProgressContents>{el.user.nickname}</S.ProgressContents>
                </S.ProgressContentsWrapper>
                <S.ProgressContentsWrapper>
                  <S.ProgressTitle>구매날짜</S.ProgressTitle>
                  <S.ProgressContents>
                    {getDate(el.createdAt)}
                  </S.ProgressContents>
                </S.ProgressContentsWrapper>
                <S.ProgressContentsWrapper>
                  <S.ProgressTitle>만료날짜</S.ProgressTitle>
                  <S.ProgressContents>{getDate(el.expired)}</S.ProgressContents>
                </S.ProgressContentsWrapper>
                <S.ProgressContentsWrapper>
                  <S.ProgressTitle>상담여부</S.ProgressTitle>
                  <S.ProgressContents>
                    {el.used ? "상담완료" : "상담미완료"}
                  </S.ProgressContents>
                </S.ProgressContentsWrapper>
              </S.TextBody>
              <S.ChatButton id={el.id} onClick={props.onClickTicket}>
                상담하기
              </S.ChatButton>
            </S.ProgressBody>
          ))}
        </InfiniteScroll>
      </S.ProgressListWrapper>

      <S.ListTitle>내 댓글 목록</S.ListTitle>
      <S.CommentListWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreCommentsData}
          hasMore={true}
          useWindow={false}
        >
          {props.commentsData?.fetchSpecialistOwnComments.map((el) => (
            <S.CommentWrapper key={el.id}>
              <S.Comment>{el.text}</S.Comment>
              <S.SympathyWrapper>
                <FaHeartbeat
                  style={{
                    width: "27px",
                    height: "23px",
                    color: "#73bea8",
                    marginRight: "10px",
                  }}
                />
                <S.Sympathy>0 명 공감</S.Sympathy>
              </S.SympathyWrapper>
            </S.CommentWrapper>
          ))}
        </InfiniteScroll>
      </S.CommentListWrapper>
    </S.Wrapper>
  );
}

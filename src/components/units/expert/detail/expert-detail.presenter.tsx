import * as S from "./expert-detail.styles";
import { Rate } from "antd";
import { AiFillStar } from "react-icons/ai";
import { IExpertDetailPresenterProps } from "./expert-detail.types";
import BasicButton from "../../../commons/button";

export default function ExpertDetailPresenter(
  props: IExpertDetailPresenterProps
) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.ExpertPhoto
          src={
            props.data?.fetchSpecialist.imgUrl
              ? props.data?.fetchSpecialist.imgUrl
              : "/expert-profile.png/"
          }
        ></S.ExpertPhoto>
        <S.TopRight>
          <S.RightWrapper>
            <S.InfoWrapper>
              <S.RightTitle>이름</S.RightTitle>
              <S.RightContents>
                {props.data?.fetchSpecialist.name}
              </S.RightContents>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.RightTitle>소개</S.RightTitle>
              <S.RightContents>
                {props.data?.fetchSpecialist.summary}
              </S.RightContents>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.RightTitle>비용</S.RightTitle>
              <S.RightContents>
                {props.data?.fetchSpecialist.price.toLocaleString()}원
              </S.RightContents>
            </S.InfoWrapper>
          </S.RightWrapper>
        </S.TopRight>
      </S.TopWrapper>
      <S.ChatButton onClick={props.onClickBuyTicket}>
        상담 신청하기
      </S.ChatButton>

      <S.BottomWrapper>
        <S.CategoryWrapper>
          <S.CategoryTitle>소개</S.CategoryTitle>
        </S.CategoryWrapper>
        <S.ContentsWrapper>
          {props.data?.fetchSpecialist.introduction}
        </S.ContentsWrapper>

        <S.CategoryWrapper>
          <S.CategoryTitle>약력</S.CategoryTitle>
        </S.CategoryWrapper>
        <S.ContentsWrapper>
          {props.data?.fetchSpecialist.career}
        </S.ContentsWrapper>

        <S.CategoryWrapper>
          <S.CategoryTitle>후기</S.CategoryTitle>
          <S.RateTitle>
            <AiFillStar
              style={{
                width: "20px",
                height: "20px",
                color: "#73bea8",
                marginRight: "5px",
              }}
            />
            {props.data?.fetchSpecialist.averageRate} 점
          </S.RateTitle>
        </S.CategoryWrapper>
        <S.ContentsWrapper>
          {props.data?.fetchSpecialist.specialistReviews.map((el) => (
            <S.ReviewWrapper key={el.id}>
              <Rate
                defaultValue={el.rate}
                disabled
                style={{ marginBottom: "15px", color: "#73bea8" }}
              />
              {el.text}
            </S.ReviewWrapper>
          ))}
        </S.ContentsWrapper>
      </S.BottomWrapper>

      <S.ButtonWrapper>
        <BasicButton
          title="목록으로"
          onClick={props.onClickMoveToList}
        ></BasicButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

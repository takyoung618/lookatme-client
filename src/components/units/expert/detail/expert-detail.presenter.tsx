import * as S from "./expert-detail.styles";
import { Rate } from "antd";
import { IExpertDetailPresenterProps } from "./expert-detail.types";
import BasicButton from "../../../commons/button";

export default function ExpertDetailPresenter(
  props: IExpertDetailPresenterProps
) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.ExpertPhoto></S.ExpertPhoto>
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
        </S.CategoryWrapper>
        <S.ContentsWrapper>
          <S.ReviewWrapper>
            <Rate
              defaultValue={2}
              disabled
              style={{ marginBottom: "15px", color: "#73bea8" }}
            />
            내용내용내용
          </S.ReviewWrapper>
          <S.ReviewWrapper>
            <Rate
              defaultValue={2}
              disabled
              style={{ marginBottom: "15px", color: "#73bea8" }}
            />
            내용내용내용
          </S.ReviewWrapper>
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

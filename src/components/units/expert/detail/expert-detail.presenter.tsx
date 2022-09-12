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
        <S.TopLeft>
          <S.LeftWrapper>
            <S.InfoWrapper>
              <S.LeftTitle>이름</S.LeftTitle>
              <S.LeftContents>철수</S.LeftContents>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.LeftTitle>소개</S.LeftTitle>
              <S.LeftContents>
                내용내용내용내용내용내용내용내용내용내용
              </S.LeftContents>
            </S.InfoWrapper>
          </S.LeftWrapper>
        </S.TopLeft>
        <S.ExpertPhoto></S.ExpertPhoto>
      </S.TopWrapper>
      <S.ChatButton>상담 신청하기</S.ChatButton>

      <S.BottomWrapper>
        <S.CategoryWrapper>
          <S.CategoryButton>소개</S.CategoryButton>
          <S.CategoryButton>내용</S.CategoryButton>
          <S.CategoryButton>후기</S.CategoryButton>
        </S.CategoryWrapper>
        <S.ContentsWrapper>
          <Rate
            defaultValue={2}
            disabled
            style={{ marginBottom: "10px", color: "#73bea8" }}
          />
          내용내용내용
        </S.ContentsWrapper>
        <S.ContentsWrapper>
          <Rate
            defaultValue={2}
            disabled
            style={{ marginBottom: "10px", color: "#73bea8" }}
          />
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
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

import * as S from "./expert-detail.styles";
import { Rate } from "antd";

export default function ExpertDetailPresenter() {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.TopLeft>
          <S.LeftWrapper>
            <S.LeftTitle>이름</S.LeftTitle>
            <S.LeftContents>철수</S.LeftContents>
            <S.LeftTitle>소개</S.LeftTitle>
            <S.LeftContents>철수입니다</S.LeftContents>
            <S.ChatButton>상담 신청하기</S.ChatButton>
          </S.LeftWrapper>
        </S.TopLeft>
        <S.ExpertPhoto></S.ExpertPhoto>
      </S.TopWrapper>

      <S.BottomWrapper>
        <S.CategoryWrapper>
          <S.CategoryButton>소개</S.CategoryButton>
          <S.CategoryButton>내용</S.CategoryButton>
          <S.CategoryButton>후기</S.CategoryButton>
        </S.CategoryWrapper>
        <S.ContentsWrapper>
          <Rate defaultValue={2} disabled style={{ marginBottom: "10px" }} />
          내용내용내용
        </S.ContentsWrapper>
      </S.BottomWrapper>

      <S.ButtonWrapper>
        <S.ListButton>목록으로</S.ListButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

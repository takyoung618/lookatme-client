import * as S from "./footer.styles";

export default function FooterPresenter() {
  return (
    <S.Wrapper>
      <S.FooterBody>
        <S.TopWrapper>
          <S.FooterButton>이용약관</S.FooterButton>
          <S.FooterButton>개인정보 취급방침</S.FooterButton>
          <S.FooterButton>공지사항</S.FooterButton>
        </S.TopWrapper>

        <S.BottomWrapper>
          <S.BottomBody>사업자 등록번호 : 123-45-67890</S.BottomBody>
          <S.BottomBody>통신판매업신고 : 제 2022-서울구로-00001호</S.BottomBody>
          <S.BottomBody>대표 : team 6</S.BottomBody>
          <S.BottomBody>주소 : 서울특별시 구로구 디지털로 300 13F</S.BottomBody>
          <S.BottomBody>고객센터 : 1234-5678</S.BottomBody>
          <S.BottomBody>
            (평일 09:00 ~ 18:00 / 점심시간 13:00~14:00)
          </S.BottomBody>
          <S.BottomBody>(주말 및 공휴일 휴무)</S.BottomBody>
        </S.BottomWrapper>
      </S.FooterBody>
    </S.Wrapper>
  );
}

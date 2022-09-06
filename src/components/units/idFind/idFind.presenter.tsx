import * as S from "./idFind.styles";

export default function IdFindUI() {
  return (
    <S.Wrapper>
      <S.Main>
        <S.HeaderBtns>
          <S.IdFindBtn>아이디</S.IdFindBtn>
          <S.PwFindBtn>비밀번호</S.PwFindBtn>
        </S.HeaderBtns>
        <S.InputWrapper>
          <S.Label>전화번호</S.Label>
          <S.PhoneWrapper>
            <S.MobileCarrier>
              <option>SKT</option>
              <option>KT</option>
              <option>LG U+</option>
              <option>알뜰폰</option>
            </S.MobileCarrier>
            <S.PhoneNumber />
            <S.AuthBtn>인증번호</S.AuthBtn>
          </S.PhoneWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>인증번호</S.Label>
          <S.PhoneWrapper>
            <S.AuthNumber />
            <S.OkBtn>확인</S.OkBtn>
          </S.PhoneWrapper>
        </S.InputWrapper>
        <S.FindBtn>아이디 찾기</S.FindBtn>
      </S.Main>
      <S.Footer>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Email placeholder="Enter Email" />
        </S.InputWrapper>
      </S.Footer>
    </S.Wrapper>
  );
}

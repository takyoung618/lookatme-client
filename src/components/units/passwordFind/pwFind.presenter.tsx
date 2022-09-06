import * as S from "./pwFind.styles";

export default function PwFindUI() {
  return (
    <S.Wrapper>
      <S.Main>
        <S.HeaderBtns>
          <S.IdFindBtn>아이디</S.IdFindBtn>
          <S.PwFindBtn>비밀번호</S.PwFindBtn>
        </S.HeaderBtns>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Email placeholder="가입된 아이디 입력" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>이름</S.Label>
          <S.Name placeholder="Enter First and Last Name" />
        </S.InputWrapper>
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
            <S.AuthBtn>확인</S.AuthBtn>
          </S.PhoneWrapper>
        </S.InputWrapper>
        <S.FindBtn>비밀번호 찾기</S.FindBtn>
      </S.Main>
      <S.Footer>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password placeholder="Enter Password" />
        </S.InputWrapper>
      </S.Footer>
    </S.Wrapper>
  );
}

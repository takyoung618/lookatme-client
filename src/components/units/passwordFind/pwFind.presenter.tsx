import * as S from "./pwFind.styles";
import { IFindPwProps } from "./pwFind.types";

export default function PwFindUI(props: IFindPwProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickFindPassword)}>
      <S.Wrapper>
        <S.Main>
          <S.HeaderBtns>
            <S.IdFindBtn type="button" onClick={props.onClickMoveToFindId}>
              아이디
            </S.IdFindBtn>
            <S.PwFindBtn type="button">비밀번호</S.PwFindBtn>
          </S.HeaderBtns>
          <S.InputWrapper>
            <S.Label>이메일</S.Label>
            <S.Email
              placeholder="가입된 이메일을 입력해주세요"
              {...props.register("email")}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>전화번호</S.Label>

            <S.PhoneWrapper>
              <div style={{ display: "flex" }}>
                <S.FrontNumber>010</S.FrontNumber>
                <S.PhoneNumber type="text" {...props.register("phoneNumber")} />
              </div>
              <S.AuthBtn type="button" onClick={props.onClickSendToken}>
                인증번호
              </S.AuthBtn>
            </S.PhoneWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>인증번호</S.Label>
            <S.PhoneWrapper>
              <div style={{ display: "flex" }}>
                <S.AuthNumber type="text" {...props.register("checkToken")} />
                <S.TokenTimer>
                  {`${String(props.minutes).padStart(2, "0")} : ${String(
                    props.seconds
                  ).padStart(2, "0")}`}
                </S.TokenTimer>
              </div>
              <S.AuthBtn type="button" onClick={props.onClickCheckToken}>
                확인
              </S.AuthBtn>
            </S.PhoneWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>새로운 비밀번호 입력</S.Label>
            <S.NewPassword type="text" {...props.register("newPassword")} />
          </S.InputWrapper>
          <S.FindBtn>비밀번호 변경</S.FindBtn>
        </S.Main>
      </S.Wrapper>
    </form>
  );
}

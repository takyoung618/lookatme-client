import * as S from "./signUp.styles";
import { ISignUpUIProps } from "./signUp.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
        <S.Wrapper>
          <S.Main>
            <S.InputWrapper>
              <S.Label>이름</S.Label>
              <S.Name
                type="text"
                placeholder="닉네임을 입력해주세요"
                {...props.register("name")}
                onChange={props.onChangeName}
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>이메일</S.Label>
              <S.Email
                type="email"
                placeholder="이메일을 입력해주세요"
                {...props.register("email")}
                onChange={props.onChangeEmail}
              />
              <S.Error>{props.formState.errors.email?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호</S.Label>
              <S.Password
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...props.register("password")}
                onChange={props.onChangePassword}
              />
              <S.Error>{props.formState.errors.password?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호 확인</S.Label>
              <S.Password
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                {...props.register("password2")}
                onChange={props.onChangePassword2}
              />
              <S.Error>{props.formState.errors.password2?.message}</S.Error>
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
                <S.PhoneNumber
                  type="number"
                  {...props.register("phoneNumber")}
                  onChange={props.onChangePhoneNumber}
                />
              </S.PhoneWrapper>
              <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
            </S.InputWrapper>
          </S.Main>
          <S.Footer>
            <button>회원가입</button>
          </S.Footer>
        </S.Wrapper>
      </form>
    </>
  );
}

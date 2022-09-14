import { printIntrospectionSchema } from "graphql";
import BasicButton from "../../commons/button";
import * as S from "./signUp.styles";
import { ISignUpUIProps } from "./signUp.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
        <S.Wrapper>
          <S.Main>
            <S.Title>회원가입</S.Title>
            <S.InputWrapper>
              <S.Label>이름</S.Label>
              <S.Name
                type="text"
                placeholder="닉네임을 입력해주세요"
                {...props.register("name")}
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>이메일</S.Label>
              <S.Email
                type="email"
                placeholder="이메일을 입력해주세요"
                {...props.register("email")}
              />
              <S.Error>{props.formState.errors.email?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호</S.Label>
              <S.Password
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...props.register("password")}
              />
              <S.Error>{props.formState.errors.password?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호 확인</S.Label>
              <S.Password
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                {...props.register("password2")}
              />
              <S.Error>{props.formState.errors.password2?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>전화번호</S.Label>
              <S.PhoneWrapper>
                <S.FrontNumber>010</S.FrontNumber>
                <S.PhoneNumber
                  type="text"
                  {...props.register("phoneNumber")}
                  placeholder="-를 빼고 입력해주세요"
                />
                <S.AuthButton onClick={props.onClickSendToken} type="button">
                  인증
                </S.AuthButton>
              </S.PhoneWrapper>
              <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
              <S.TokenWrapper>
                <S.Token type="text" {...props.register("checkToken")} />
                <S.TokenTimer>
                  {`${String(props.minutes).padStart(2, "0")} : ${String(
                    props.seconds
                  ).padStart(2, "0")}`}
                </S.TokenTimer>

                <button onClick={props.onClickCheckToken} type="button">
                  인증 완료
                </button>
              </S.TokenWrapper>
            </S.InputWrapper>
          </S.Main>
          <S.Footer>
            <BasicButton
              title={"회원가입"}
              isBig
              onClick={props.onClickSignUp}
            />
          </S.Footer>
        </S.Wrapper>
      </form>
    </>
  );
}

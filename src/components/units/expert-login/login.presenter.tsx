import BasicButton from "../../commons/button";
import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";

export default function LoginExpertUI(props: ILoginUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.Title>전문가 로그인</S.Title>
        <S.Main>
          <S.InputWrapper>
            <S.Label>이메일</S.Label>
            <S.Email
              type="text"
              placeholder="이메일 입력하기"
              {...props.register("email")}
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호 입력하기"
              {...props.register("password")}
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </S.InputWrapper>
          <BasicButton title={"로그인"} isBig />
        </S.Main>
      </S.Wrapper>
    </form>
  );
}

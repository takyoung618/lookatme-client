import BasicButton from "../../commons/button";
import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.Title>로그인</S.Title>
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
          <BasicButton title={"로그인"} onClick={props.onClickLogin} isBig />
        </S.Main>
        <S.Footer>
          <S.InnerFooter>
            멤버가 아니신가요?
            <button type="button" onClick={props.onClickMoveToSignup}>
              회원가입
            </button>
          </S.InnerFooter>
          <S.InnerFooter>
            <button type="button" onClick={props.onClickMoveToIdFind}>
              아이디찾기
            </button>
            |
            <button type="button" onClick={props.onClickMoveToPasswordFind}>
              비밀번호찾기
            </button>
          </S.InnerFooter>
          <S.ImgFooter>
            <S.SocialImg src="/구글.png" />
            <S.SocialImg src="/네이버.png" />
            <S.SocialImg src="/카카오.png" />
          </S.ImgFooter>
        </S.Footer>
      </S.Wrapper>
    </form>
  );
}

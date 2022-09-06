import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";

export default function LoginAdminUI(props: ILoginUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.Title>관리자 로그인</S.Title>
        <S.Main>
          <S.InputWrapper>
            <S.Label>이메일</S.Label>
            <S.Email
              type="text"
              placeholder="이메일 입력하기"
              {...props.register("email")}
              onChange={props.onChangeEmail}
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호 입력하기"
              {...props.register("password")}
              onChange={props.onChangePassword}
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </S.InputWrapper>
          <button onClick={props.onClickLogin}>로그인</button>
        </S.Main>
        <S.Footer>
          <S.InnerFooter>
            <button type="button" onClick={props.onClickMoveToIdFind}>
              아이디찾기
            </button>
            |
            <button type="button" onClick={props.onClickMoveToPasswordFind}>
              비밀번호찾기
            </button>
          </S.InnerFooter>
          <S.InnerFooter>SNS계정으로 로그인하기</S.InnerFooter>
          <S.ImgFooter>
            <S.SocialImg src="/구글.png" />
            <S.SocialImg src="/네이버.png" />
            <S.SocialImg src="/카카오.png" />
          </S.ImgFooter>
          <S.InnerFooter>
            멤버가 아니신가요?
            <button onClick={props.onClickMoveToSignup}>회원가입</button>
          </S.InnerFooter>
          <S.InnerFooter>
            <button onClick={props.onClickMoveToExpert}>전문가 로그인</button>
          </S.InnerFooter>
          <S.InnerFooter>
            <button onClick={props.onClickMoveToAdmin}>관리자 로그인</button>
          </S.InnerFooter>
        </S.Footer>
      </S.Wrapper>
    </form>
  );
}

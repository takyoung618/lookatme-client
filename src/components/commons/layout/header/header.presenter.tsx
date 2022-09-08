import * as S from "./header.styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { IHeaderPresenterProps } from "./header.types";
import { Drawer, Space } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

export default function HeaderPresenter(props: IHeaderPresenterProps) {
  const [accessToken] = useRecoilState(accessTokenState);

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.Logo onClick={props.onClickLogo}>
          <S.LogoImage src="/Logo.jpg/"></S.LogoImage>
        </S.Logo>
        <Space>
          <S.MenuButton type="primary" onClick={props.showMenu}>
            <GiHamburgerMenu style={{ width: "25px", height: "25px" }} />
          </S.MenuButton>
        </Space>
      </S.ButtonWrapper>
      <Drawer
        placement={props.placement}
        onClose={props.onClose}
        open={props.open}
        key={props.placement}
      >
        {!accessToken && (
          <>
            <S.DrawerLoginButton onClick={props.onClickLogin}>
              로그인
            </S.DrawerLoginButton>
            <S.DrawerSignUpButton onClick={props.onClickSignUp}>
              회원가입
            </S.DrawerSignUpButton>
          </>
        )}

        {accessToken && (
          <>
            <S.DrawerLoginButton onClick={props.onClickLogOut}>
              로그아웃
            </S.DrawerLoginButton>
            <S.DrawerSignUpButton onClick={props.onClickMyPage}>
              마이페이지
            </S.DrawerSignUpButton>
          </>
        )}

        <S.DrawerButton onClick={props.onClickCommunity}>
          커뮤니티
        </S.DrawerButton>
        <S.DrawerButton onClick={props.onClickExpert}>
          전문가 찾기
        </S.DrawerButton>
        <S.LoginWrapper>
          <button onClick={props.onClickMoveToExpert}>전문가 로그인</button>
          <button onClick={props.onClickMoveToAdmin}>관리자 로그인</button>
        </S.LoginWrapper>
      </Drawer>
    </S.Wrapper>
  );
}

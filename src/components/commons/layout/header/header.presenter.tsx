import * as S from "./header.styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { IHeaderPresenterProps } from "./header.types";
import { Drawer, Space } from "antd";

export default function HeaderPresenter(props: IHeaderPresenterProps) {
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
        <S.DrawerLoginButton onClick={props.onClickLogin}>
          로그인
        </S.DrawerLoginButton>
        <S.DrawerSignUpButton onClick={props.onClickSignUp}>
          회원가입
        </S.DrawerSignUpButton>
        <S.DrawerButton onClick={props.onClickCommunity}>
          커뮤니티
        </S.DrawerButton>
        <S.DrawerButton onClick={props.onClickExpert}>
          전문가 찾기
        </S.DrawerButton>
      </Drawer>
    </S.Wrapper>
  );
}

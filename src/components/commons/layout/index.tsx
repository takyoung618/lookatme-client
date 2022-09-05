import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import BannerContainer from "./banner/banner.container";
import FooterContainer from "./footer/footer.container";
import HeaderContainer from "./header/header.container";

interface ILayoutProps {
  children: ReactNode;
}

const LANDING_PAGE = "/";

const MAIN_PAGE = "/main/";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 390px;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const landingPage = LANDING_PAGE.includes(router.asPath);

  const isLookBanner = MAIN_PAGE.includes(router.asPath);

  return (
    !landingPage && (
      <Wrapper>
        <HeaderContainer></HeaderContainer>
        {isLookBanner && <BannerContainer></BannerContainer>}
        <Body>{props.children}</Body>
        <FooterContainer></FooterContainer>
      </Wrapper>
    )
  );
}

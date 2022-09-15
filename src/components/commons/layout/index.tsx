import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import FooterContainer from "./footer/footer.container";
import HeaderContainer from "./header/header.container";

interface ILayoutProps {
  children: ReactNode;
}

const LANDING_PAGE = "/";

const LIVE_CHATING_PAGE = "/live-chat";

const ADMIN_MY_PAGE = "/admin-my-page";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  max-width: 414px;
  min-width: 320px;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const landingPage = LANDING_PAGE.includes(router.asPath);

  const liveChatingPage = router.asPath.includes(LIVE_CHATING_PAGE);

  const adminMyPage = router.asPath.includes(ADMIN_MY_PAGE);

  return (
    <>
      {!landingPage && !liveChatingPage && !adminMyPage && (
        <Wrapper>
          <HeaderContainer></HeaderContainer>
          <Body>{props.children}</Body>
          <FooterContainer></FooterContainer>
        </Wrapper>
      )}

      {landingPage && <div>{props.children}</div>}

      {liveChatingPage && (
        <Wrapper>
          <HeaderContainer></HeaderContainer>
          <Body>{props.children}</Body>
        </Wrapper>
      )}

      {adminMyPage && (
        <div>
          <HeaderContainer></HeaderContainer>
          {props.children}
          <FooterContainer></FooterContainer>
        </div>
      )}
    </>
  );
}

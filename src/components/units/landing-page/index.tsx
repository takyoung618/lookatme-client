import styled from "@emotion/styled";
import Description from "./Description";
import Header from "./Header";
import QuotePage from "./Quote";

const Body = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
`;

export default function Landing() {
  return (
    <Body>
      <Header />
      <Description />
      <QuotePage />
    </Body>
  );
}

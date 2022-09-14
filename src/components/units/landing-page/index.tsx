import styled from "@emotion/styled";
import Description from "./Description";
import Header from "./Header";
import QuoteUI from "./Quote";

const Body = styled.div`
  min-width: 320px;
  max-width: 414px;
  height: 100vh;
  margin: 0 auto;
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
      <QuoteUI />
    </Body>
  );
}

import { useQuery } from "@apollo/client";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import useScrollFadeIn from "../../../../commons/libraries/useScrollFadeIn";
import { FETCH_SELECTED_QUOTE } from "./quote.queries";

const ZoominOut = keyframes`
  from{
		transform: scale(1);
	}
	to{
		transform: scale(1.05);
	}
`;

const Container = styled.section`
  background-color: #f7f9f3;
  display: flex;
  width: 100%;
  height: 900px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 0px;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 1.7rem;
  color: #73c0a9;
`;

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
`;

const Button = styled.button`
  padding: 1.5rem 5.5rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  color: #ffffff;
  background: #0fbaa3;
  border-radius: 5rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${ZoominOut} 1s 1s infinite ease-in-out alternate;

  :hover {
    color: #0fbaa3;
    background: #ffffff;
    border: 1px solid #0fbaa3;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0 50px 0;
`;

const Quote = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2;

  & div {
    width: 100%;
    height: 500px;
    background: url("https://storage.googleapis.com/lookatme-storage/2022/9/21/ec0c1c90-c4df-4800-86b5-6b58b15d238c/origin/quote.png")
      no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5.3rem;
  }
`;

const QuoteMessage = styled.span`
  font-size: 1.2rem;
`;

const QuoteAuthor = styled.span`
  font-size: 1.2rem;
`;

export default function QuoteUI() {
  const firstAnimated = useScrollFadeIn("up", 0.6, 0.5);
  const secondAnimated = useScrollFadeIn("up", 0.3, 0.7);
  const thirdAnimated = useScrollFadeIn("up", 1, 0);

  const router = useRouter();

  const { data } = useQuery(FETCH_SELECTED_QUOTE);

  const onClickMoveToMain = () => {
    router.push("/main");
  };

  return (
    <Container>
      <Wrapper>
        <Title {...firstAnimated}>오늘의 명언</Title>
        <ImageContainer>
          <Quote {...secondAnimated}>
            <div {...thirdAnimated}>
              <QuoteMessage>{data?.fetchSelectedQuote?.message}</QuoteMessage>
              <QuoteAuthor>by. {data?.fetchSelectedQuote?.author}</QuoteAuthor>
            </div>
          </Quote>
        </ImageContainer>
        <Button onClick={onClickMoveToMain}>LOOK AT ME</Button>
      </Wrapper>
    </Container>
  );
}

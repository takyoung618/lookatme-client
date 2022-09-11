import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/libraries/useScrollFadeIn";

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
  width: 100vw;
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
  margin-bottom: 50px;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0 50px 0;
`;

const HeaderBar = styled.div`
  width: 100%;
  height: 22px;
  background-color: #73c0a9;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const Quote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default function QuotePage() {
  const firstAnimated = useScrollFadeIn("up", 0.6, 0.5);
  const secondAnimated = useScrollFadeIn("up", 0.3, 0.7);

  return (
    <Container>
      <HeaderBar></HeaderBar>
      <Wrapper>
        <Title {...firstAnimated}>오늘의 명언</Title>
        <ImageContainer>
          <Quote {...secondAnimated}>
            다른 사람의 행동이 당신 마음의 평온을 깨트리도록 내버려 두지 마라
          </Quote>
          <img src="/landing/icon.png" width={400} />
        </ImageContainer>
        <Button>LOOK AT ME</Button>
      </Wrapper>
    </Container>
  );
}

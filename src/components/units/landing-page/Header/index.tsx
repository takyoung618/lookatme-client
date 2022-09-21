import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/libraries/useScrollFadeIn";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  border: 0.1px solid transparent;
  background-image: url("/landing/background.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  line-height: 1.33;
  font-size: 2.3rem;
  font-weight: bold;
  margin: 442px auto 0 auto;
  padding: 0 30px;
`;

const MouseImage = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  position: relative;
  bottom: 70px;
  animation: mouseMove 0.7s ease-in 0s infinite alternate none running;
  background-image: url("/landing/mouse.png");
  background-size: cover;

  @media (min-width: 390px) {
    bottom: -30px;
  }

  @media (min-width: 1000px) {
    bottom: -300px;
  }

  @keyframes mouseMove {
    from {
      transform: translateY(-60%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -70px;
`;

const Img = styled.img`
  width: 18rem;
  height: 18rem;
  position: relative;
  top: 0;

  @media (min-width: 390px) {
    width: 22rem;
    height: 22rem;
  }
`;

export default function Header() {
  const firstAnimated = useScrollFadeIn("up", 1, 0.5);

  return (
    <Container>
      <ImgWrapper {...firstAnimated}>
        <Img src="/landing/logo.png" alt="로고 이미지" />
      </ImgWrapper>
      <Wrapper></Wrapper>
      <MouseImage />
    </Container>
  );
}

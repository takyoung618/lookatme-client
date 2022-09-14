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

const Title = styled.span`
  color: #fff;
  line-height: 1.4;

  span {
    font-size: 2rem;
    position: absolute;
    bottom: 130px;
    color: black;
    border-bottom: 4px solid #73c0a9;
    border-radius: 4px;

    @media (min-width: 390px) {
      bottom: 100px;
      font-size: 2.4rem;
    }

    @media (min-width: 1000px) {
      bottom: -100px;
    }
  }
`;

const MouseImage = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  position: relative;
  bottom: 30px;
  animation: mouseMove 0.7s ease-in 0s infinite alternate none running;
  background-image: url("/landing/mouse.png");
  background-size: cover;

  @media (min-width: 390px) {
    bottom: -150px;
  }

  @media (min-width: 1000px) {
    bottom: -300px;
  }

  @keyframes mouseMove {
    from {
      transform: translateY(-60%);
    }
    to {
      transfrom: translateY(0%);
    }
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export default function Header() {
  const firstAnimated = useScrollFadeIn("up", 1, 0.5);

  return (
    <Container>
      <ImgWrapper>
        <Img src="/landing/logo.png" alt="" />
      </ImgWrapper>
      <Wrapper>
        <Title>
          <div {...firstAnimated}>
            <span>
              당신의 고민 <br />
              룩앳미에서 <br />
              해결하세요!!!
            </span>
          </div>
        </Title>
      </Wrapper>
      <MouseImage />
    </Container>
  );
}

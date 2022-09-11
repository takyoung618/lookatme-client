import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/libraries/useScrollFadeIn";

const Container = styled.div`
  height: 100vh;
  width: 110vw;
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
    position: absolute;
    top: -400px;
    color: black;
    border-bottom: 4px solid #73c0a9;
    border-radius: 4px;
  }
`;

const MouseImage = styled.div`
  width: 56px;
  height: 56px;
  position: absolute;
  left: 50%;
  bottom: 50px;
  animation: mouseMove 0.7s ease-in 0s infinite alternate none running;
  background-image: url("/landing/mouse.png");
  background-size: cover;
  color: black;

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

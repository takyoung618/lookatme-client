import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/libraries/useScrollFadeIn";

const Container = styled.div`
  max-height: 100vh;
  height: 100%;
  width: 100%;
  border: 0.1px solid transparent;
  background-image: url("https://storage.googleapis.com/lookatme-storage/2022/9/21/bd5d74b8-b522-47f5-9eed-1ad2ccd67833/origin/background.jpg");
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
  bottom: 30%;
  animation: mouseMove 0.7s ease-in 0s infinite alternate none running;
  background-image: url("https://storage.googleapis.com/lookatme-storage/2022/9/21/6869b8a3-c39f-4b23-9736-6614bf7d14b8/origin/mouse.png");
  background-size: cover;

  @media (min-width: 390px) {
    bottom: 5%;
  }

  @media (min-width: 400px) {
    bottom: 10%;
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
        <Img
          src="https://storage.googleapis.com/lookatme-storage/2022/9/21/a69ae0a4-ca17-4df0-af23-c10c68ea1e28/origin/logo.png"
          alt="로고 이미지"
        />
      </ImgWrapper>
      <Wrapper></Wrapper>
      <MouseImage />
    </Container>
  );
}

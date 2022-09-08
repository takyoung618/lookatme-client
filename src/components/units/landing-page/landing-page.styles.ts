import styled from "@emotion/styled";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  left: calc(-50vw + 50%);
  background: url("travel-01.jpg") center/cover;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  -ms-overflow-style: none !important;
  ::-webkit-scrollbar {
    display: none;
    width: none !important;
  }
`;

export const MyParallax = styled(Parallax)`
  -ms-overflow-style: none !important;
  ::-webkit-scrollbar {
    display: none;
    width: none !important;
  }
  overflow-x: hidden;
`;

export const Layer1 = styled(ParallaxLayer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Layer2 = styled(ParallaxLayer)`
  width: auto;
  height: 100vh;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 100px;
  animation: animation 2s ease-in-out running;
  @keyframes animation {
    0% {
      opacity: 0;
      filter: blur(10px);
    }
    25% {
      opacity: 0.5;
      filter: blur(1px);
    }
    75% {
      opacity: 0.75;
      filter: blur(10px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
`;

import * as S from "./landing-page.styles";
import { ParallaxLayer } from "@react-spring/parallax";

export default function LandingUI() {
  return (
    <S.Wrapper>
      <S.MyParallax pages={3}>
        <S.Layer1 speed={1}>
          <S.Title>Look At Me</S.Title>

          <ParallaxLayer offset={2} speed={0} style={{}} factor={0.5}>
            <img
              src="travel-01.jpg"
              style={{ display: "block", width: "50%", marginLeft: "55%" }}
            />
            <img
              src="travel-01.jpg"
              style={{ display: "block", width: "40%", marginLeft: "0" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0} style={{}} factor={0.5}>
            <img
              src="travel-01.jpg"
              style={{ display: "block", width: "50%", marginLeft: "55%" }}
            />
            <img
              src="travel-01.jpg"
              style={{ display: "block", width: "40%", marginLeft: "0" }}
            />
          </ParallaxLayer>
        </S.Layer1>
        <S.Layer2>
          <ParallaxLayer offset={2} speed={0} style={{}} factor={0.5}>
            <img
              src="travel-02.jpg"
              style={{ display: "block", width: "50%", marginLeft: "55%" }}
            />
            <img
              src="travel-02.jpg"
              style={{ display: "block", width: "40%", marginLeft: "0" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0} style={{}} factor={0.5}>
            <img
              src="travel-02.jpg"
              style={{ display: "block", width: "50%", marginLeft: "55%" }}
            />
            <img
              src="travel-02.jpg"
              style={{ display: "block", width: "40%", marginLeft: "0" }}
            />
          </ParallaxLayer>
        </S.Layer2>
      </S.MyParallax>
    </S.Wrapper>
  );
}

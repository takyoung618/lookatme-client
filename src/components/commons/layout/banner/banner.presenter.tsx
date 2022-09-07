import * as S from "./banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerPresenter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        <div>
          <S.SliderImg src="/travel-01.jpg" />
        </div>
        <div>
          <S.SliderImg src="/travel-02.jpg" />
        </div>
        <div>
          <S.SliderImg src="/travel-03.jpg" />
        </div>
      </Slider>
    </S.Wrapper>
  );
}

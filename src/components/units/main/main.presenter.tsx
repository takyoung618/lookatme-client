import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./main.styles";

export default function MainUI() {
  const settings = {
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
          <S.SliderItem>베스트 게시글</S.SliderItem>
        </div>
        <div>
          <S.SliderItem>베스트 게시글</S.SliderItem>
        </div>
        <div>
          <S.SliderItem>베스트 게시글</S.SliderItem>
        </div>
      </Slider>
      <S.Buttons>
        <button>공지사항</button>
        <button>FAQ</button>
      </S.Buttons>
    </S.Wrapper>
  );
}

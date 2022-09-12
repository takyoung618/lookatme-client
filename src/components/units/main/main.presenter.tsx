import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./main.styles";

export default function MainUI() {
  const list = [1, 2, 3, 4];
  const title = ["전문가 상담", "커뮤니티", "마이페이지", "포스트잇"];

  const settings = {
    speed: 500,
    arrows: false,
    autoplay: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <Slider
        speed={settings.speed}
        arrows={settings.arrows}
        autoplay={settings.autoplay}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        <div>
          <S.SliderItem1>
            <img src="/main/메인1.png" />
            <img src="/main/사람1.png" />
          </S.SliderItem1>
        </div>
        <div>
          <S.SliderItem2>
            <img src="/main/메인2.png" />
            <img src="/main/사람2.png" />
          </S.SliderItem2>
        </div>
      </Slider>
      <S.Category>
        {list.map((el) => (
          <div key={el}>
            <img src={`/main/icon${el}.png`} />
            <span>{`${title[el - 1]}`}</span>
          </div>
        ))}
      </S.Category>
      <S.Reviews>
        <S.Title>베스트 사연</S.Title>
        <Slider
          speed={settings.speed}
          arrows={settings.arrows}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
        >
          <div>
            <S.ReviewItem>
              <S.ExpertName>오박사</S.ExpertName>
              <S.ReviewCont>피카츄 주셔서 감사합니다~!!</S.ReviewCont>
              <S.UserProfile>
                <S.NickName>지우</S.NickName>
                <S.CreatedAt>22년 9월 12일</S.CreatedAt>
              </S.UserProfile>
              <S.MoveBtn>해당 전문가 보러 가기</S.MoveBtn>
            </S.ReviewItem>
          </div>
          <div>
            <S.ReviewItem>
              <S.ExpertName>오박사</S.ExpertName>
              <S.ReviewCont>피카츄 주셔서 감사합니다~!!</S.ReviewCont>
              <S.UserProfile>
                <S.NickName>지우</S.NickName>
                <S.CreatedAt>22년 9월 12일</S.CreatedAt>
              </S.UserProfile>
              <S.MoveBtn>해당 전문가 보러 가기</S.MoveBtn>
            </S.ReviewItem>
          </div>
        </Slider>
      </S.Reviews>
      <S.Experts>
        <S.ExpertsTitle>등록한 전문가들</S.ExpertsTitle>
        <S.SemiTitle>
          당신의 고민을 해결해줄 전문가들을 만나보세요!!
        </S.SemiTitle>
        <Slider
          speed={settings.speed}
          arrows={settings.arrows}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
        >
          <div>
            <S.ExpertsItem>
              <S.Shape>
                <S.ItemImage src="/main/오박사.jpeg" />
              </S.Shape>
              <h3>오박사</h3>
              <S.Job>포켓몬 박사</S.Job>
              <S.Carrier>
                온갖 포켓몬을 30년간 연구해서 잘 알고 있습니다.
              </S.Carrier>
            </S.ExpertsItem>
          </div>
          <div>
            <S.ExpertsItem>
              <S.Shape>
                <S.ItemImage src="/main/오박사.jpeg" />
              </S.Shape>
              <h3>오박사</h3>
              <S.Job>포켓몬 박사</S.Job>
              <S.Carrier>
                온갖 포켓몬을 30년간 연구해서 잘 알고 있습니다.
              </S.Carrier>
            </S.ExpertsItem>
          </div>
        </Slider>
      </S.Experts>
      <S.Buttons>
        <div>
          <S.OfficialBtn></S.OfficialBtn>
          <span>공지사항</span>
        </div>
        <div>
          <S.FaqBtn></S.FaqBtn>
          <span>FAQ</span>
        </div>
      </S.Buttons>
    </S.Wrapper>
  );
}

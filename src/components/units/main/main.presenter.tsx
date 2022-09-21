import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./main.styles";
import { IMainUIProps } from "./main.types";
import { getDate } from "../../../commons/libraries/utils";
import { FaHeartbeat } from "react-icons/fa";

export default function MainUI(props: IMainUIProps) {
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
        <div onClick={props.onClickMoveToExpert}>
          <img src="/main/icon1.png" />
          <span>전문가 상담</span>
        </div>
        <div onClick={props.onClickMoveToCommunity}>
          <img src="/main/icon2.png" />
          <span>커뮤니티</span>
        </div>
        <div onClick={props.onClickMoveToMyPage}>
          <img src="/main/icon3.png" />
          <span>마이페이지</span>
        </div>
        <div onClick={props.onClickMoveToPostIt}>
          <img src="/main/icon4.png" />
          <span>포스트잇</span>
        </div>
      </S.Category>
      <S.Reviews>
        <S.Title>베스트 사연</S.Title>
        <Slider
          speed={settings.speed}
          arrows={settings.arrows}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
        >
          {props.data?.fetchBestStories?.map((el) => (
            <S.StoryItem key={el.id}>
              <S.StoryTitle>{el.title}</S.StoryTitle>
              <S.UserProfile>
                <S.NickName>작성자: {el.user.nickname}</S.NickName>
                <S.CreatedAt>{getDate(el.createAt)}</S.CreatedAt>
              </S.UserProfile>
              <S.CommentsCont>
                <FaHeartbeat
                  style={{
                    width: "22px",
                    height: "20px",
                    color: "#73bea8",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                />
                <S.Sympathy>{el.likes}명 공감</S.Sympathy>
                <S.Comment>댓글 {el.commentCounts}개</S.Comment>
              </S.CommentsCont>
              <S.MoveBtn id={el.id} onClick={props.onClickMoveToDetail}>
                해당 사연 보러 가기
              </S.MoveBtn>
            </S.StoryItem>
          ))}
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
          {props.SpecialListData?.fetchSpecialists?.map((el) => (
            <S.ExpertsItem key={el.id}>
              <S.Shape>
                <S.ItemImage src="/main/오박사.jpeg" />
              </S.Shape>
              <h3>{el.name}</h3>
              <S.Job>{el.career}</S.Job>
              <S.Carrier>{el.summary}</S.Carrier>
            </S.ExpertsItem>
          ))}
        </Slider>
      </S.Experts>
      <S.Buttons>
        <S.ButtonItem>
          <S.OfficialBtn></S.OfficialBtn>
          <span>공지사항</span>
        </S.ButtonItem>
        <S.ButtonItem>
          <S.FaqBtn onClick={props.onClickMoveToFAQ}></S.FaqBtn>
          <span>FAQ</span>
        </S.ButtonItem>
      </S.Buttons>
    </S.Wrapper>
  );
}

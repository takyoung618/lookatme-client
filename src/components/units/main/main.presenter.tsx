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
            <img src="https://storage.googleapis.com/lookatme-storage/2022/9/21/676cf8d6-1f89-47e4-a507-6162c49d6be8/origin/main1.png" />
            <img src="https://storage.googleapis.com/lookatme-storage/2022/9/21/96d67d5e-6b6f-4407-b2a1-25b69ab5c2bc/origin/human1.png" />
          </S.SliderItem1>
        </div>
        <div>
          <S.SliderItem2>
            <img src="https://storage.googleapis.com/lookatme-storage/2022/9/21/c379f549-b0a3-41f7-b75d-3d57e2f53dd4/origin/main2.png" />
            <img src="https://storage.googleapis.com/lookatme-storage/2022/9/21/e9c80d06-7f6b-4386-bec5-6fed1af1a862/origin/human2.png" />
          </S.SliderItem2>
        </div>
      </Slider>
      <S.Category>
        <div onClick={props.onClickMoveToExpert}>
          <img src="https://storage.googleapis.com/lookatme-storage/2022/9/21/32685526-3eeb-4d26-aaab-c244347de9b9/origin/icon1.png" />
          <span>전문가 상담</span>
        </div>
        <div onClick={props.onClickMoveToCommunity}>
          <img src="https://storage.googleapis.com/lookatme-storage/2022/9/21/2ec1a89b-7815-4294-b1f4-4cc155bcbc67/origin/icon2.png" />
          <span>커뮤니티</span>
        </div>
        <div onClick={props.onClickMoveToMyPage}>
          <img src="https://storage.googleapis.com/lookatme-storage/2022/9/21/cf8a3327-f4b5-4201-afc0-8f6de4e350e2/origin/icon3.png" />
          <span>마이페이지</span>
        </div>
        <div onClick={props.onClickMoveToPostIt}>
          <img src="https://storage.googleapis.com/lookatme-storage/2022/9/21/0fed45ee-2b24-4e65-a453-0620771973ce/origin/icon4.png" />
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
                <S.ItemImage
                  src={
                    el.imgUrl
                      ? el.imgUrl
                      : "https://storage.googleapis.com/lookatme-storage/2022/9/21/4d0a31bd-9cc7-4e13-bc9c-cf07cd98070a/origin/expert-profile.png"
                  }
                />
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
          <S.OfficialBtn onClick={props.onClickMoveToOfficial}></S.OfficialBtn>
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

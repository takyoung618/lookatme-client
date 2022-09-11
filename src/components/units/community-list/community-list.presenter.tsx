import * as S from "./community-list.styles";
import { ImHeart } from "react-icons/im";
import { FaLeaf } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { ICommunityListPresenterProps } from "./community-list.types";

const ButtonList = [
  "전체",
  "직업,진로",
  "연애,결혼",
  "대인관계",
  "자아,성격",
  "가족",
  "자유주제",
];

export default function CommunityListPresenter(
  props: ICommunityListPresenterProps
) {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        {ButtonList.map((el) => (
          <S.Button key={el}>{el}</S.Button>
        ))}
      </S.ButtonWrapper>

      <S.FilterWrapper>
        <S.FilterButton>시간순</S.FilterButton>
        <S.FilterButton>좋아요순</S.FilterButton>
        <S.FilterButton>댓글순</S.FilterButton>
      </S.FilterWrapper>

      <S.BodyWrapper>
        <S.Category>직업, 진로</S.Category>
        <S.Title>취업을 어디로 해야 할까요?</S.Title>
        <S.Contents>
          취업을 어디로 해야 할지 너무 고민이에요. 답을 알려주세요!
        </S.Contents>
        <S.BodyBottomWrapper>
          <S.ContentsInfo>
            <S.LikeButton>
              <ImHeart
                style={{ width: "15px", height: "15px", color: "#F293A3" }}
              />
            </S.LikeButton>
            <S.LikeInfo>0명 공감 댓글 0개</S.LikeInfo>
          </S.ContentsInfo>

          <S.UserInfo>
            <S.UserProfile>
              <FaLeaf
                style={{ width: "15px", height: "15px", color: "#74D579" }}
              />
            </S.UserProfile>
            <S.UserName>닉네임</S.UserName>
          </S.UserInfo>
        </S.BodyBottomWrapper>
      </S.BodyWrapper>

      <S.BodyWrapper>
        <S.Category>직업, 진로</S.Category>
        <S.Title>취업을 어디로 해야 할까요?</S.Title>
        <S.Contents>
          취업을 어디로 해야 할지 너무 고민이에요. 답을 알려주세요!
        </S.Contents>
        <S.BodyBottomWrapper>
          <S.ContentsInfo>
            <S.LikeButton>
              <ImHeart
                style={{ width: "15px", height: "15px", color: "#F293A3" }}
              />
            </S.LikeButton>
            <S.LikeInfo>0명 공감 댓글 0개</S.LikeInfo>
          </S.ContentsInfo>

          <S.UserInfo>
            <S.UserProfile>
              <FaLeaf
                style={{ width: "15px", height: "15px", color: "#74D579" }}
              />
            </S.UserProfile>
            <S.UserName>닉네임</S.UserName>
          </S.UserInfo>
        </S.BodyBottomWrapper>
      </S.BodyWrapper>

      <S.WriteButtonWrapper>
        <S.WriteButton onClick={props.onClickWriteButton}>
          <BsPencilSquare
            style={{ width: "15px", height: "15px", marginRight: "5px" }}
          />
          작성하기
        </S.WriteButton>
      </S.WriteButtonWrapper>
    </S.Wrapper>
  );
}

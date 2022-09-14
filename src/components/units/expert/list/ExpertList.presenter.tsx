import * as S from "./ExpertList.styles";
import { IExpertListPresenterProps } from "./ExpertList.types";

export default function ExpertListUi(props: IExpertListPresenterProps) {
  return (
    <S.Wrapper>
      <S.FetchWrapper>
        <S.TimeFilterButton time={props.time} onClick={props.onClickTime}>
          최근순
        </S.TimeFilterButton>
        <S.ReviewFilterButton
          review={props.review}
          onClick={props.onClickReview}
        >
          리뷰순
        </S.ReviewFilterButton>
        <S.PriceFilterButton price={props.price} onClick={props.onClickPrice}>
          높은가격순
        </S.PriceFilterButton>
      </S.FetchWrapper>
      <S.ListWrapper>
        <S.Image />
        <S.ProfileWrapper>
          <S.NameWrapper>
            <S.NameTitle>이름</S.NameTitle>
            <S.Name>김박사 </S.Name>
          </S.NameWrapper>
          <S.IntroductionWrapper>
            <S.IntroductionTitle>소개</S.IntroductionTitle>
            <S.Introduction>
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </S.Introduction>
          </S.IntroductionWrapper>
          <S.PriceWrapper>
            <S.PriceTitle>비용</S.PriceTitle>
            <S.Price>50000원</S.Price>
          </S.PriceWrapper>
        </S.ProfileWrapper>
      </S.ListWrapper>
    </S.Wrapper>
  );
}

import * as S from "./ExpertList.styles";
import { IExpertListPresenterProps } from "./ExpertList.types";
import { AiFillStar } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroller";

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
          가격순
        </S.PriceFilterButton>
      </S.FetchWrapper>

      {props.time && (
        <S.ListWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.FetchMoreTimeData}
            hasMore={true}
            useWindow={false}
            style={{ width: "100%" }}
          >
            {props.timeData?.fetchSpecialists.map((el) => (
              <S.MapWrapper key={el.id}>
                <S.TopWrapper onClick={props.onClickMoveToDetail} id={el.id}>
                  <S.Image
                    src={el.imgUrl ? el.imgUrl : "/expert-profile.png/"}
                  ></S.Image>
                  <S.ProfileWrapper>
                    <S.NameWrapper>
                      <S.NameTitle>이름</S.NameTitle>
                      <S.Name>{el.name}</S.Name>
                    </S.NameWrapper>
                    <S.IntroductionWrapper>
                      <S.IntroductionTitle>소개</S.IntroductionTitle>
                      <S.Introduction>{el.summary}</S.Introduction>
                    </S.IntroductionWrapper>
                    <S.PriceWrapper>
                      <S.PriceTitle>비용</S.PriceTitle>
                      <S.Price>{el.price.toLocaleString()}원</S.Price>
                    </S.PriceWrapper>
                  </S.ProfileWrapper>
                </S.TopWrapper>
                <S.BottomWrapper>
                  <AiFillStar
                    style={{
                      width: "27px",
                      height: "23px",
                      color: "#73bea8",
                      marginRight: "5px",
                    }}
                  />{" "}
                  평균 {el.averageRate} 점
                </S.BottomWrapper>
              </S.MapWrapper>
            ))}
          </InfiniteScroll>
        </S.ListWrapper>
      )}

      {props.review && (
        <S.ListWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.FetchMoreReviewData}
            hasMore={true}
            useWindow={false}
            style={{ width: "100%" }}
          >
            {props.reviewData?.fetchSpecialsitByRate.map((el) => (
              <S.MapWrapper key={el.id}>
                <S.TopWrapper onClick={props.onClickMoveToDetail} id={el.id}>
                  <S.Image
                    src={el.imgUrl ? el.imgUrl : "/expert-profile.png/"}
                  ></S.Image>
                  <S.ProfileWrapper>
                    <S.NameWrapper>
                      <S.NameTitle>이름</S.NameTitle>
                      <S.Name>{el.name}</S.Name>
                    </S.NameWrapper>
                    <S.IntroductionWrapper>
                      <S.IntroductionTitle>소개</S.IntroductionTitle>
                      <S.Introduction>{el.summary}</S.Introduction>
                    </S.IntroductionWrapper>
                    <S.PriceWrapper>
                      <S.PriceTitle>비용</S.PriceTitle>
                      <S.Price>{el.price.toLocaleString()}원</S.Price>
                    </S.PriceWrapper>
                  </S.ProfileWrapper>
                </S.TopWrapper>
                <S.BottomWrapper>
                  <AiFillStar
                    style={{
                      width: "27px",
                      height: "23px",
                      color: "#73bea8",
                      marginRight: "5px",
                    }}
                  />{" "}
                  평균 {el.averageRate} 점
                </S.BottomWrapper>
              </S.MapWrapper>
            ))}
          </InfiniteScroll>
        </S.ListWrapper>
      )}

      {props.price && (
        <S.ListWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.FetchMorePriceData}
            hasMore={true}
            useWindow={false}
            style={{ width: "100%" }}
          >
            {props.priceData?.fetchSpecialistByPrice.map((el) => (
              <S.MapWrapper key={el.id}>
                <S.TopWrapper onClick={props.onClickMoveToDetail} id={el.id}>
                  <S.Image
                    src={el.imgUrl ? "el.imgUrl" : "/expert-profile.png/"}
                  ></S.Image>
                  <S.ProfileWrapper>
                    <S.NameWrapper>
                      <S.NameTitle>이름</S.NameTitle>
                      <S.Name>{el.name}</S.Name>
                    </S.NameWrapper>
                    <S.IntroductionWrapper>
                      <S.IntroductionTitle>소개</S.IntroductionTitle>
                      <S.Introduction>{el.summary}</S.Introduction>
                    </S.IntroductionWrapper>
                    <S.PriceWrapper>
                      <S.PriceTitle>비용</S.PriceTitle>
                      <S.Price>{el.price.toLocaleString()}원</S.Price>
                    </S.PriceWrapper>
                  </S.ProfileWrapper>
                </S.TopWrapper>
                <S.BottomWrapper>
                  <AiFillStar
                    style={{
                      width: "27px",
                      height: "23px",
                      color: "#73bea8",
                      marginRight: "5px",
                    }}
                  />{" "}
                  평균 {el.averageRate} 점
                </S.BottomWrapper>
              </S.MapWrapper>
            ))}
          </InfiniteScroll>
        </S.ListWrapper>
      )}
    </S.Wrapper>
  );
}

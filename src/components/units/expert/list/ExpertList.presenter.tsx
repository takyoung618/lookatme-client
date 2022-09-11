import InfiniteScroll from "react-infinite-scroller"
import * as S from "./ExpertList.styles"


export default function ExpertListUi(props){
    console.log(props.data?.fetchSpecialists)
    return (
        <S.Wrapper>
            <S.ButtonWrapper>
                <S.Button>
                    최근 순
                </S.Button>
                <S.Button>
                    리뷰 순
                </S.Button>
                <S.Button>
                    높은 가격 순
                </S.Button>
            </S.ButtonWrapper>
            <InfiniteScroll pageStart={0} loadMore={props.onFetchMore} hasMore={true || false}>
            {props.data?.fetchSpecialists.map((el) => (
                <S.ListWrapper  key={el._id} id={el._id} onClick={props.onClickMoveToDetail(el)}>
                    <S.Image
                    src={
                        el.images?.[0] || el.images?.[1] || el.images?.[2]
                          ? `http://storage.googleapis.com/${el.images?.[0]}`
                          : `/today.jpg`
                      }/>
                    <S.InfoWrapper>
                        <S.Name>이름 : {el.name}</S.Name>
                        <S.Introduce>자기소개: {el.summary }</S.Introduce>
                        <S.Price>상담비: {el.price}</S.Price>
                    </S.InfoWrapper>
                </S.ListWrapper>
            ))}
            </InfiniteScroll>
        </S.Wrapper>
    )
}
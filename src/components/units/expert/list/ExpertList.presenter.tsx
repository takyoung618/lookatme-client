import * as S from "./ExpertList.styles"

export default function ExpertListUi(){

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
            <S.ListWrapper>
                <S.Image/>
                <S.InfoWrapper>
                    <S.Name>이름</S.Name>
                    <S.Introduce>자기소개</S.Introduce>
                    <S.Price>상담비</S.Price>
                </S.InfoWrapper>
            </S.ListWrapper>
            <S.ListWrapper>
                <S.Image/>
                <S.InfoWrapper>
                    <S.Name>이름</S.Name>
                    <S.Introduce>자기소개</S.Introduce>
                    <S.Price>상담비</S.Price>
                </S.InfoWrapper>
            </S.ListWrapper>
        </S.Wrapper>
    )
}
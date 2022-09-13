import * as S from "./ExpertList.styles"

export default function ExpertListUi(){
    return (
        <S.Wrapper>
            <S.FetchWrapper>
                <S.Fetch>최근 순</S.Fetch>
                <S.Fetch>리뷰 순</S.Fetch>
                <S.Fetch>높은 가격 순</S.Fetch>
            </S.FetchWrapper>
            <S.ListWrapper>
                <S.SpecialistWrapper>
                    <S.Image/>
                    <S.ProfileWrapper>
                        <S.NameWrapper>
                            <S.NameTitle>이름</S.NameTitle>
                            <S.Name>김박사 </S.Name>
                        </S.NameWrapper>
                        <S.IntroductionWrapper>
                            <S.IntroductionTitle>소개</S.IntroductionTitle>
                            <S.Introduction>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                            </S.Introduction>
                        </S.IntroductionWrapper>
                        <S.PriceWrapper>
                            <S.PriceTitle>비용</S.PriceTitle>
                            <S.Price>50000원</S.Price>
                        </S.PriceWrapper>          
                    </S.ProfileWrapper>
                </S.SpecialistWrapper>
            </S.ListWrapper> 
        </S.Wrapper>
    )
}
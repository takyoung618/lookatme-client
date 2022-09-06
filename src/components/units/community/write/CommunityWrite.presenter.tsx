import * as S from "./CommunityWrite.styles"
import { BsCamera } from "react-icons/bs"
import {IoIosArrowBack, IoIosArrowDown } from "react-icons/io"

export default function CommunityWriteUi(){
    return (
        <S.Wrapper>
        <S.HeaderWrapper>
            <IoIosArrowBack style={{ width: "30px", height: "30px" }}/>
            <S.Title>사연 등록</S.Title>
        </S.HeaderWrapper>
        <S.Category>
            <S.CategoryTitle>카테고리 선택</S.CategoryTitle>
            <IoIosArrowDown style={{ width: "30px", height: "30px", marginTop: "6px" }}/>
        </S.Category>
        <S.ImageWrapper>
           <S.Image>
           <BsCamera style={{ width: "30px", height: "30px", color: "gray", marginTop: "50.5px"}}/>
           </S.Image>
           <S.Image>
           <BsCamera style={{ width: "30px", height: "30px", color: "gray", marginTop: "50.5px" }}/>
           </S.Image>
           <S.Image>
            <BsCamera style={{ width: "30px", height: "30px", color: "gray", marginTop: "50.5px" }}/>
           </S.Image>
        </S.ImageWrapper>
        <S.ContentsWrapper>
            <S.Contents></S.Contents>
        </S.ContentsWrapper>
        <S.ButtonWrapper>
            <S.SubmitButton>
                작성하기
            </S.SubmitButton>
        </S.ButtonWrapper>
    </S.Wrapper>
    ) 
}


// 카테고리 구현, 아이콘 styles 로 밀어버리고 가운데 정렬,
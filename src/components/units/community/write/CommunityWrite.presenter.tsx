import * as S from "./CommunityWrite.styles"
import { BsCamera } from "react-icons/bs"
import {IoIosArrowDown } from "react-icons/io"

export default function CommunityWriteUi(props){
    return (
        <S.Wrapper>
        <S.HeaderWrapper>
            <S.Title>사연 등록</S.Title>
        </S.HeaderWrapper>
        <S.Category>
            <S.CategoryTitle>카테고리 선택</S.CategoryTitle>
            <IoIosArrowDown style={{ width: "30px", height: "30px", marginTop: "6px" }}/>
        </S.Category>
        <S.ImageWrapper>
           <S.Image>
           <BsCamera style={{ width: "30px", height: "30px", color: "gray", marginTop: "135px"}}/>
           </S.Image>
           <S.Image>
           <BsCamera style={{ width: "30px", height: "30px", color: "gray", marginTop: "135px" }}/>
           </S.Image>
           <S.Image>
            <BsCamera style={{ width: "30px", height: "30px", color: "gray", marginTop: "135px" }}/>
           </S.Image>
        </S.ImageWrapper>
        <S.ContentsWrapper>
            <S.Contents></S.Contents>
        </S.ContentsWrapper>
        <S.ButtonWrapper>
            <S.ListButton onClick={props.onClickList}>
                목록으로
            </S.ListButton>
            <S.SubmitButton>
                작성하기
            </S.SubmitButton>
        </S.ButtonWrapper>
    </S.Wrapper>
    ) 
}
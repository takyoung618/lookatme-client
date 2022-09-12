import { OmitProps } from "antd/lib/transfer/ListBody"
import BasicButton from "../../../commons/button"
import CommentWrite from "../../comment/write/CommentWrite.container"
import * as S from "./CommunityDetail.styles"

export default function CommunityDetailUi(props){
    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.TitleWrapper>
                    <S.Title>
                        가족 고민
                    </S.Title>
                    <S.TimeWrapper>
                        <S.Circle></S.Circle>
                        <S.Time>5분전</S.Time>
                    </S.TimeWrapper>             
                </S.TitleWrapper>
                <S.NickNameWriter>닉네임</S.NickNameWriter>
            </S.HeaderWrapper>
            <S.TextBoxWrapper>
                <S.TextTitle>고민이 너무 많습니다.</S.TextTitle>
                <S.Text>내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들내용들</S.Text>
                </S.TextBoxWrapper>
            <S.FooterWrapper>
                <S.SympathyWrapper>
                    <img src="/녹색하트.png"/>
                    <S.Sympathy>0명 공감</S.Sympathy>
                    <S.Comment>댓글 0개</S.Comment>
                </S.SympathyWrapper>
                <S.UserWrapper>
                    <img src="/녹색유저.png"/>
                    <S.NickNameUser>닉네임</S.NickNameUser>
                </S.UserWrapper>
            </S.FooterWrapper>
            <S.ButtonWrapper>
                <BasicButton onClick={props.onClickMoveToList} title="목록으로"></BasicButton>
                <BasicButton title="수정하기"></BasicButton>
                <BasicButton title="삭제하기"></BasicButton>
            </S.ButtonWrapper>
            <S.CommentWrapper>
                <S.CommentInput/>
                <S.CommentButton>댓글작성</S.CommentButton>
            </S.CommentWrapper>
            
            <CommentWrite/>
        </S.Wrapper>
        
    )
}
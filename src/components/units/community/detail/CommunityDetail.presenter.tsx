import BasicButton from "../../../commons/button"
import CommentWrite from "../../comment/write/CommentWrite.container"
import { getDate } from "../../../../../src/commons/libraries/utils";
import * as S from "./CommunityDetail.styles"

export default function CommunityDetailUi(props){
    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.TitleWrapper>
                    <S.Title>
                        {props.data?.fetchStory.category.name}
                    </S.Title>
                    <S.TimeWrapper>
                        <S.Circle></S.Circle>
                        <S.Time>{getDate(props.data?.fetchStory.createAt)}</S.Time>
                    </S.TimeWrapper>             
                </S.TitleWrapper>
                <S.NickNameWriter>{props.data?.fetchStory.user.nickname}</S.NickNameWriter>
            </S.HeaderWrapper>
            <S.TextBoxWrapper>
                <S.TextTitle>{props.data?.fetchStory.title}</S.TextTitle>
                <S.Text>{props.data?.fetchStory.text}</S.Text>
                </S.TextBoxWrapper>
            <S.FooterWrapper>
                <S.SympathyWrapper>
                    <img src="/녹색하트.png"/>
                    <S.Sympathy>{props.data?.fetchStory.likes}명 공감</S.Sympathy>
                    <S.Comment>댓글 {props.data?.fetchStory.commentCounts}개</S.Comment>
                </S.SympathyWrapper>
                <S.UserWrapper>
                    <img src="/녹색유저.png"/>
                    <S.NickNameUser>{props.UserInfo?.fetchLoginUser.nickname}</S.NickNameUser>
                </S.UserWrapper>
            </S.FooterWrapper>
            <S.ButtonWrapper>
                <BasicButton onClick={props.onClickMoveToList} title="목록으로"></BasicButton>
                <BasicButton title="수정하기" onClick={props.onClickMoveToUpdate}></BasicButton>
                <BasicButton title="삭제하기" onClick={props.onClickDeleteStory}></BasicButton>
            </S.ButtonWrapper>
            <S.CommentWrapper>
                <S.CommentInput/>
                <S.CommentButton>댓글작성</S.CommentButton>
            </S.CommentWrapper>
            
            <CommentWrite/>
        </S.Wrapper>
        
    )
}
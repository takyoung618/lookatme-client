import * as S from "./CommentWrite.styles"
import {AiOutlineUser} from "react-icons/ai"

export default function CommentWriteUI(){
    return (
        <S.Wrapper>
            <S.ExpertCommentWrapper>
                <S.CommentTitleWrapper>
                    <S.Expert>전문가 댓글 보기</S.Expert>
                    <S.NameWrapper>
                        <AiOutlineUser/>
                        <S.Name>전문가이름</S.Name>
                    </S.NameWrapper>
                </S.CommentTitleWrapper>
                <S.CommentExpert>
                    힘내세요
                </S.CommentExpert>
                <S.CommentInputExpert/>
            </S.ExpertCommentWrapper>
            
            <S.CommentWrapper>
                <S.CommentTitleWrapper>
                    <S.Expert>일반 댓글 보기</S.Expert>
                    <S.NameWrapper>
                        <AiOutlineUser/>
                        <S.Name>닉네임</S.Name>
                    </S.NameWrapper>
                </S.CommentTitleWrapper>
                <S.CommentUser>
                    힘내세요
                </S.CommentUser>
                <S.CommentInput/>
            </S.CommentWrapper>
        </S.Wrapper>
    )
}
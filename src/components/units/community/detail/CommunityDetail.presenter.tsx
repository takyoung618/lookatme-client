import * as S from "./CommunityDetail.styles"
import {AiOutlineUser, AiOutlineClockCircle} from "react-icons/ai"
import { ImHeart } from "react-icons/im";
import {GiSiren} from "react-icons/gi"

export default function CommunityDetailUi(){
    return (
        <S.Wrapper>
                <S.Title>상세 페이지</S.Title>
            <S.DetailWrapper>
                <S.HeaderWrapper>
                    <S.Category>
                        가족
                    </S.Category>
                    <S.InfoWrapper>
                        <S.NicknameWrapper>
                            <AiOutlineUser/>
                            <S.NickName>닉네임</S.NickName>
                        </S.NicknameWrapper>
                        <S.TimeWrapper>
                            <AiOutlineClockCircle/>
                            <S.Time>5분전</S.Time>
                        </S.TimeWrapper>
                    </S.InfoWrapper>
                </S.HeaderWrapper>
                <S.ContentsWrapper>
                    내용들내용들내용들 
                </S.ContentsWrapper>
                <S.FooterWrapper>
                    <S.SympathyWrapper>
                        <ImHeart
                        style={{ width: "15px", height: "15px", color: "#F293A3" }}
                        />
                        <S.Sympathy>0명 공감</S.Sympathy>
                    </S.SympathyWrapper>
                    <GiSiren style={{ width: "25px", height: "25px", color: "red", marginRight: "9px", marginBottom: "5px"}}/>
                </S.FooterWrapper>
            </S.DetailWrapper>
            <S.ButtonWrapper>
                <S.Button>
                    목록으로
                </S.Button>
                <S.Button>
                    수정하기
                </S.Button>
                <S.Button>
                    삭제하기
                </S.Button>
            </S.ButtonWrapper>

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
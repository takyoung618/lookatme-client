import * as S from "./ExpertMyPage.styles"
import { ImHeart } from "react-icons/im";

export default function ExpertMyPageUI(){
    return (
        <S.Wrapper>
            <S.TitleWrapper>
                <S.Title>
                    내 정보
                </S.Title>
            </S.TitleWrapper>
            <S.ProfileWrapper>
                <S.Image/>
                <S.InfoWrapper>
                    <S.Id>아이디</S.Id>
                    <S.Name>이름</S.Name>
                    <S.Introduce>자기소개 안녕하세요</S.Introduce>
                    <S.Button>
                        수정하기
                    </S.Button>
                </S.InfoWrapper>
                
            </S.ProfileWrapper>
            <S.MemberWrapper>
                <S.MemberList>상담 회원 목록</S.MemberList>
                <S.ProgressWrapper>
                    <S.Progress>진행 중</S.Progress>
                    <S.Progress>진행 완료</S.Progress>
                </S.ProgressWrapper>
            </S.MemberWrapper>
            <S.CommentListWrapper>
                <S.CommentList>나의 댓글</S.CommentList>
                <S.CommentWrapper>
                    <S.CommentInfoWrapper>
                        <S.Comment>제가 생각하기에 00님은 아마...</S.Comment>
                        <S.Time>5시간 전</S.Time>
                        <S.SympathyWrapper>
                            <ImHeart
                            style={{ width: "15px", height: "15px", color: "#F293A3" }}
                            />
                            <S.Sympathy>1명이 공감</S.Sympathy>
                        </S.SympathyWrapper>
                    </S.CommentInfoWrapper>
                </S.CommentWrapper>
                <S.CommentWrapper>
                    <S.CommentInfoWrapper>
                        <S.Comment>제가 생각하기에 00님은 아마...</S.Comment>
                        <S.Time>5시간 전</S.Time>
                        <S.SympathyWrapper>
                            <ImHeart
                            style={{ width: "15px", height: "15px", color: "#F293A3" }}
                            />
                            <S.Sympathy>1명이 공감</S.Sympathy>
                        </S.SympathyWrapper>
                    </S.CommentInfoWrapper>
                </S.CommentWrapper>
            </S.CommentListWrapper>
        </S.Wrapper>
    )
}
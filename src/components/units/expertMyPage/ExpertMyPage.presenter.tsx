import * as S from "./ExpertMyPage.styles"

export default function ExpertMyPageUI(){
    return (
        <S.Wrapper>
            <S.Header>전문가 마이페이지</S.Header>
            <S.SpecialistWrapper>
                <S.Image/>
                <S.ProfileWrapper>
                    <S.IdWrapper>
                        <S.IdTitle>
                            아이디
                        </S.IdTitle>
                        <S.Id>dsfskldsf</S.Id>
                    </S.IdWrapper>
                    <S.NameWrapper>
                        <S.NameTitle>
                            이름
                        </S.NameTitle>
                        <S.Name>박박디라라</S.Name>
                    </S.NameWrapper>
                    <S.IntroduceWrapper>
                        <S.IntroduceTitle>자기소개</S.IntroduceTitle>
                        <S.Introduce>안녕하세요안녕하세요</S.Introduce>
                    </S.IntroduceWrapper>
                </S.ProfileWrapper>
            </S.SpecialistWrapper>
            <S.UserListWrapper>
                <S.UserListTitle>상담회원 목록</S.UserListTitle>
                <S.ProgressWrapper>
                    <S.Progressing>진행 중</S.Progressing>
                    <S.Progressed>진행 완료</S.Progressed>
                </S.ProgressWrapper>
            </S.UserListWrapper>
            <S.CommentListWrapper>
                <S.MyCommentTitle>나의 댓글</S.MyCommentTitle>
                <S.CommentWrapper>
                    <S.Comment>제가 생각하기에 영희님은 아마도</S.Comment>
                    <S.Time>6시간 전</S.Time>
                    <S.SympathyWrapper>
                        <img src="/녹색하트.png"/>
                        <S.Sympathy>0명 공감</S.Sympathy>
                    </S.SympathyWrapper>
                </S.CommentWrapper>
            </S.CommentListWrapper>
        </S.Wrapper>
    )
}
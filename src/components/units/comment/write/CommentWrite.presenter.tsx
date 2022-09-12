import * as S from "./CommentWrite.styles"

export default function CommentWriteUI(){
    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.ExpertHeader>전문가 댓글</S.ExpertHeader>
            </S.HeaderWrapper>
            <S.CommentWrapper>
                <S.UserWrapper>
                    <S.UserInfoWrapper>
                        <img src="/녹색유저.png"/>
                        <S.NickNameUser>전문가 이름</S.NickNameUser>
                    </S.UserInfoWrapper>
                    <S.TimeWrapper>
                        <S.Circle></S.Circle>
                        <S.Time>5분전</S.Time>
                    </S.TimeWrapper> 
                </S.UserWrapper>
                <S.Comment>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</S.Comment>
            </S.CommentWrapper>
            <S.FooterWrapper>
                <S.SympathyWrapper>
                    <img src="/녹색하트.png"/>
                    <S.Sympathy>0명 공감</S.Sympathy>
                    <S.Comment>답글 쓰기</S.Comment>
                </S.SympathyWrapper>
                <S.SirenWrapper>
                    <img src="/사이렌.png"/>
                </S.SirenWrapper>
            </S.FooterWrapper>
            <S.HeaderWrapper>
                <S.UserHeader>일반 댓글</S.UserHeader>
            </S.HeaderWrapper>
            <S.CommentWrapper>
                <S.UserWrapper>
                    <S.UserInfoWrapper>
                        <img src="/녹색유저.png"/>
                        <S.NickNameUser>전문가 이름</S.NickNameUser>
                    </S.UserInfoWrapper>
                    <S.TimeWrapper>
                        <S.Circle></S.Circle>
                        <S.Time>5분전</S.Time>
                    </S.TimeWrapper> 
                </S.UserWrapper>
                <S.Comment>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</S.Comment>
            </S.CommentWrapper>
            <S.FooterWrapper>
                <S.SympathyWrapper>
                    <img src="/녹색하트.png"/>
                    <S.Sympathy>0명 공감</S.Sympathy>
                    <S.Comment>답글 쓰기</S.Comment>
                </S.SympathyWrapper>
                    <S.SirenWrapper>
                        <img src="/사이렌.png"/>
                    </S.SirenWrapper>
            </S.FooterWrapper>
        </S.Wrapper>
    )
}
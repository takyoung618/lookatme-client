import BasicButton from "../../commons/button";
import * as S from "./ExpertMyPage.styles";
import { FaHeartbeat } from "react-icons/fa";

export default function ExpertMyPageUI() {
  return (
    <S.Wrapper>
      <S.Header>전문가 마이페이지</S.Header>
      <S.SpecialistWrapper>
        <S.Image></S.Image>
        <S.ProfileWrapper>
          <S.Title>계정</S.Title>
          <S.Contents>dsfskldsf</S.Contents>
        </S.ProfileWrapper>
        <S.ProfileWrapper>
          <S.Title>이름</S.Title>
          <S.Contents>박박디라라</S.Contents>
        </S.ProfileWrapper>
        <S.ProfileWrapper>
          <S.Title>요약</S.Title>
          <S.Contents>안녕하세요안녕하세요</S.Contents>
        </S.ProfileWrapper>
        <S.SummaryWrapper>
          <S.Title>소개</S.Title>
          <S.Contents>
            소개이구요 소개입니다소개이구요 소개입니다소개이구요 소개입니다
          </S.Contents>
        </S.SummaryWrapper>
        <S.ProfileWrapper>
          <S.Title>약력</S.Title>
          <S.Contents>무슨대학교 무슨학과 박사임</S.Contents>
        </S.ProfileWrapper>
        <S.ProfileWrapper>
          <S.Title>상담비</S.Title>
          <S.Contents>1000원</S.Contents>
        </S.ProfileWrapper>
      </S.SpecialistWrapper>

      <S.ButtonWrapper>
        <BasicButton title="프로필 수정"></BasicButton>
      </S.ButtonWrapper>

      <S.ListTitle>상담회원 목록</S.ListTitle>
      <S.ProgressWrapper>
        <S.ProgressButton>진행 중</S.ProgressButton>
        <S.ProgressButton>진행 완료</S.ProgressButton>
      </S.ProgressWrapper>
      <S.ProgressListWrapper></S.ProgressListWrapper>

      <S.ListTitle>내 댓글 목록</S.ListTitle>
      <S.CommentListWrapper>
        <S.CommentWrapper>
          <S.Comment>
            제가 생각하기에 영희님은 아마도제가 생각하기에 영희님은 아마도제가
            생각하기에 영희님은 아마도제가 생각하기에 영희님은 아마도제가
            생각하기에 영희님은 아마도제가 생각하기에 영희님은 아마도제가
            생각하기에 영희님은 아마도
          </S.Comment>
          <S.SympathyWrapper>
            <FaHeartbeat
              style={{
                width: "27px",
                height: "23px",
                color: "#73bea8",
                marginRight: "10px",
              }}
            />
            <S.Sympathy>0 명 공감</S.Sympathy>
          </S.SympathyWrapper>
        </S.CommentWrapper>
      </S.CommentListWrapper>
    </S.Wrapper>
  );
}

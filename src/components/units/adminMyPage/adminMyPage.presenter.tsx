import * as S from "./adminMyPage.styles";

export default function AdminMyPageUI(props) {
  return (
    <S.Wrapper>
      <InnerWrapper>
        <Title>명언 관리</Title>
        <button onClick={props.onClickStart}>명언 시작 버튼</button>
        <button onClick={props.onClickStop}>명언 정지 버튼</button>
      </InnerWrapper>
      <InnerWrapper>
        <Title>신고 목록 관리</Title>
      </InnerWrapper>
      <InnerWrapper>
        <Title>전문가 관리</Title>
      </InnerWrapper>
      <InnerWrapper>
        <Title>게시글 관리</Title>
      </InnerWrapper>
    </S.Wrapper>
  );
}

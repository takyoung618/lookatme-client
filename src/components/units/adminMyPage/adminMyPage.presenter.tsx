import * as S from "./adminMyPage.styles";

export default function AdminMyPageUI(props) {
  return (
    <S.Wrapper>
      <S.Title style={{ textAlign: "center" }}>관리자 페이지</S.Title>
      <S.InnerWrapper>
        <S.Title>명언 관리</S.Title>
        <S.StartBtn onClick={props.onClickStart}>명언 시작 버튼</S.StartBtn>
        <S.StopBtn onClick={props.onClickStop}>명언 정지 버튼</S.StopBtn>
        <S.CreateBtn>명언 만들기 버튼</S.CreateBtn>
      </S.InnerWrapper>
      <S.InnerWrapper>
        <S.Title>신고 목록 관리</S.Title>
        <S.Row>
          <S.Column__Basic>번호</S.Column__Basic>
          <S.Column__Title>제목</S.Column__Title>
          <S.Column__Basic>작성자</S.Column__Basic>
          <S.Column__Basic>날짜</S.Column__Basic>
          <S.Column__Basic>삭제</S.Column__Basic>
          <S.Column__Basic></S.Column__Basic>
        </S.Row>
        <S.Row>
          <S.Column__Basic>1</S.Column__Basic>
          <S.Column__Title>제목</S.Column__Title>
          <S.Column__Basic>작성자</S.Column__Basic>
          <S.Column__Basic>날짜</S.Column__Basic>
          <S.Column__Basic>
            <input type="checkbox" />
          </S.Column__Basic>
          <S.DeleteBtn>삭제</S.DeleteBtn>
        </S.Row>
      </S.InnerWrapper>
      <S.InnerWrapper>
        <S.Title>전문가 관리</S.Title>
        <S.Row>
          <S.Column__Basic>번호</S.Column__Basic>
          <S.Column__Title>제목</S.Column__Title>
          <S.Column__Basic>작성자</S.Column__Basic>
          <S.Column__Basic>날짜</S.Column__Basic>
          <S.Column__Basic>삭제</S.Column__Basic>
          <S.Column__Basic></S.Column__Basic>
        </S.Row>
        <S.Row>
          <S.Column__Basic>1</S.Column__Basic>
          <S.Column__Title>제목</S.Column__Title>
          <S.Column__Basic>작성자</S.Column__Basic>
          <S.Column__Basic>날짜</S.Column__Basic>
          <S.Column__Basic>
            <input type="checkbox" />
          </S.Column__Basic>
          <S.DeleteBtn>삭제</S.DeleteBtn>
        </S.Row>
      </S.InnerWrapper>
      <S.InnerWrapper>
        <S.Title>게시글 관리</S.Title>
        <S.Row>
          <S.Column__Basic>번호</S.Column__Basic>
          <S.Column__Title>제목</S.Column__Title>
          <S.Column__Basic>작성자</S.Column__Basic>
          <S.Column__Basic>날짜</S.Column__Basic>
          <S.Column__Basic>삭제</S.Column__Basic>
          <S.Column__Basic></S.Column__Basic>
        </S.Row>
        <S.Row>
          <S.Column__Basic>1</S.Column__Basic>
          <S.Column__Title>제목</S.Column__Title>
          <S.Column__Basic>작성자</S.Column__Basic>
          <S.Column__Basic>날짜</S.Column__Basic>
          <S.Column__Basic>
            <input type="checkbox" />
          </S.Column__Basic>
          <S.DeleteBtn>삭제</S.DeleteBtn>
        </S.Row>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}

import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../commons/libraries/utils";
import * as S from "./adminMyPage.styles";
import { AdminMyPageUIProps } from "./adminMyPage.types";
import { AiOutlineClose } from "react-icons/ai";

export default function AdminMyPageUI(props: AdminMyPageUIProps) {
  return (
    <S.Wrapper>
      <S.Title style={{ textAlign: "center" }}>관리자 페이지</S.Title>
      <S.InnerWrapper>
        <S.Title>명언 관리</S.Title>
        <S.StartBtn onClick={props.onClickStart}>명언 시작 버튼</S.StartBtn>
        <S.StopBtn onClick={props.onClickStop}>명언 정지 버튼</S.StopBtn>
        <S.CreateBtn onClick={() => props.setQuoteModalIsOpen(true)}>
          명언 만들기 버튼
        </S.CreateBtn>
        <S.Row>
          <S.ColumnBasic>번호</S.ColumnBasic>
          <S.ColumnQuoteTitle>명언</S.ColumnQuoteTitle>
          <S.ColumnBasic>이름</S.ColumnBasic>
        </S.Row>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreQuote}
          hasMore={true}
          useWindow={false}
          style={{ height: "300px", overflow: "auto" }}
        >
          {props.QuoteData?.fetchQuotes.map((el, index) => (
            <S.Row key={el.id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnQuote>{el.message}</S.ColumnQuote>
              <S.ColumnBasic>{el.author}</S.ColumnBasic>
              <S.DeleteBtn id={el.id} onClick={props.onClickDeleteQuote}>
                삭제
              </S.DeleteBtn>
            </S.Row>
          ))}
        </InfiniteScroll>
      </S.InnerWrapper>
      <S.QuoteModal isOpen={props.quoteModalIsOpen}>
        <S.ModalCloseButton>
          <AiOutlineClose
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            onClick={() => props.setQuoteModalIsOpen(false)}
          />
        </S.ModalCloseButton>
        <S.ModalWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>명언</S.ModalTitle>
            <S.ModalInput onChange={props.onChangeMessage}></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>이름</S.ModalTitle>
            <S.ModalInput onChange={props.onChangeAuthor}></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalButton onClick={props.onClickCreateQuote}>
            명언 등록하기
          </S.ModalButton>
        </S.ModalWrapper>
      </S.QuoteModal>

      <S.InnerWrapper>
        <S.Title>신고 목록 관리</S.Title>
        <S.Row>
          <S.ColumnBasic>번호</S.ColumnBasic>
          <S.ColumnTitle>제목</S.ColumnTitle>
          <S.ColumnBasic>작성자</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.Row>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreReported}
          hasMore={true}
          useWindow={false}
          style={{ height: "300px", overflow: "auto" }}
        >
          {props.ReportedData?.fetchReportedStories.map((el, index) => (
            <S.Row key={el.id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle>{el.title}</S.ColumnTitle>
              <S.ColumnBasic>{el.user.nickname}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createAt)}</S.ColumnBasic>
              <S.DeleteBtn
                id={el.id}
                onClick={props.onClickDeleteReportedStory}
              >
                삭제
              </S.DeleteBtn>
            </S.Row>
          ))}
        </InfiniteScroll>
      </S.InnerWrapper>

      <S.InnerWrapper>
        <S.TitleWrapper>
          <S.Title>전문가 관리</S.Title>
          <S.ExpertCreateButton onClick={() => props.setModalIsOpen(true)}>
            전문가 등록
          </S.ExpertCreateButton>
        </S.TitleWrapper>
        <S.Row>
          <S.ColumnBasic>번호</S.ColumnBasic>
          <S.ColumnTitle>계정</S.ColumnTitle>
          <S.ColumnBasic>이름</S.ColumnBasic>
          <S.ColumnBasic>가격</S.ColumnBasic>
        </S.Row>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreSpecialist}
          hasMore={true}
          useWindow={false}
          style={{ height: "300px", overflow: "auto" }}
        >
          {props.SpecialistData?.fetchSpecialists.map((el, index) => (
            <S.Row key={el.id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle>{el.account}</S.ColumnTitle>
              <S.ColumnBasic>{el.name}</S.ColumnBasic>
              <S.ColumnBasic>{el.price}</S.ColumnBasic>
              <S.DeleteBtn id={el.id} onClick={props.onClickDeleteSpecialist}>
                삭제
              </S.DeleteBtn>
            </S.Row>
          ))}
        </InfiniteScroll>
      </S.InnerWrapper>

      <S.ModalStyle isOpen={props.modalIsOpen}>
        <S.ModalCloseButton>
          <AiOutlineClose
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            onClick={() => props.setModalIsOpen(false)}
          />
        </S.ModalCloseButton>
        <S.ModalWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>계정</S.ModalTitle>
            <S.ModalInput onChange={props.onChangeAccount}></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>비밀번호</S.ModalTitle>
            <S.ModalInput onChange={props.onChangePassword}></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>이름</S.ModalTitle>
            <S.ModalInput onChange={props.onChangeName}></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>요약</S.ModalTitle>
            <S.ModalInput onChange={props.onChangeSummary}></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>설명</S.ModalTitle>
            <S.ModalInput onChange={props.onChangeIntroduction}></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>약력</S.ModalTitle>
            <S.ModalInput onChange={props.onChangeCareer}></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>가격</S.ModalTitle>
            <S.ModalInput onChange={props.onChangePrice}></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalContentsWrapper>
            <S.ModalTitle>사진</S.ModalTitle>
            <S.ModalInput
              type="file"
              onChange={props.onChangeFile}
            ></S.ModalInput>
          </S.ModalContentsWrapper>
          <S.ModalButton onClick={props.onClickSpecialistSubmitButton}>
            등록하기
          </S.ModalButton>
        </S.ModalWrapper>
      </S.ModalStyle>

      <S.InnerWrapper>
        <S.Title>게시글 관리</S.Title>
        <S.Row>
          <S.ColumnBasic>번호</S.ColumnBasic>
          <S.ColumnTitle>제목</S.ColumnTitle>
          <S.ColumnBasic>작성자</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.Row>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreCommunityFetchMore}
          hasMore={true}
          useWindow={false}
          style={{ height: "300px", overflow: "auto" }}
        >
          {props.CommunityData?.fetchStoriesByTime.map((el, index) => (
            <S.Row key={el.id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle>{el.title}</S.ColumnTitle>
              <S.ColumnBasic>{el.user.nickname}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createAt)}</S.ColumnBasic>
              <S.DeleteBtn id={el.id} onClick={props.onClickDeleteCommunity}>
                삭제
              </S.DeleteBtn>
            </S.Row>
          ))}
        </InfiniteScroll>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}

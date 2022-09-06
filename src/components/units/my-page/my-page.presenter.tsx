import * as S from "./my-page.styles";
import { ImHeart } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { IMyPagePresenterProps } from "./my-page.types";

export default function MyPagePresenter(props: IMyPagePresenterProps) {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.CategoryTitle>아이디</S.CategoryTitle>
        <S.ProfileContents>aaa@aaa.com</S.ProfileContents>
        <S.CategoryTitle>닉네임</S.CategoryTitle>
        <S.ProfileContents>철수</S.ProfileContents>
        <S.CategoryTitle>보유 포인트</S.CategoryTitle>
        <S.ProfileContents>0 P</S.ProfileContents>
        <S.ExpertButtonWrapper>
          <S.ExpertButton onClick={() => props.setModalIsOpen(true)}>
            충전하기
          </S.ExpertButton>
          <S.ExpertButton>수정하기</S.ExpertButton>
        </S.ExpertButtonWrapper>
      </S.ProfileWrapper>

      <S.ModalStyle isOpen={props.modalIsOpen}>
        <S.ModalCloseButton onClick={() => props.setModalIsOpen(false)}>
          <AiOutlineClose style={{ width: "20px", height: "20px" }} />
        </S.ModalCloseButton>
        <S.ModalTitle>
          <GrMoney style={{ marginRight: "5px" }} /> 포인트 충전하기
          <GrMoney style={{ marginLeft: "5px" }} />
        </S.ModalTitle>
        <S.ModalSelect
          value={props.selected}
          onChange={props.onChangeSelectedPoint}
        >
          <option value="">충전 포인트 선택</option>
          <option value="5000">5000 포인트</option>
          <option value="10000">10,000 포인트</option>
          <option value="50000">50,000 포인트</option>
          <option value="100000">100,000 포인트</option>
        </S.ModalSelect>
        <S.ModalChargeButton isActive={props.isActive}>
          충전하기
        </S.ModalChargeButton>
      </S.ModalStyle>

      <S.CategoryWrapper>
        <S.CategoryTitle>내 전문가</S.CategoryTitle>
        <S.ExpertWrapper>
          <S.ExpertBody>
            <S.ExpertPhoto></S.ExpertPhoto>
            <S.ExpertDetail>
              <S.CategoryContents>이름 : </S.CategoryContents>
              <S.CategoryContents>소개 : </S.CategoryContents>
              <S.CategoryContents>상담 비용 : </S.CategoryContents>
            </S.ExpertDetail>
          </S.ExpertBody>

          <S.ExpertButtonWrapper>
            <S.ExpertButton>상담하기</S.ExpertButton>
            <S.ExpertButton>리뷰쓰기</S.ExpertButton>
          </S.ExpertButtonWrapper>
        </S.ExpertWrapper>

        <S.ExpertWrapper>
          <S.ExpertBody>
            <S.ExpertPhoto></S.ExpertPhoto>
            <S.ExpertDetail>
              <S.CategoryContents>이름 : </S.CategoryContents>
              <S.CategoryContents>소개 : </S.CategoryContents>
              <S.CategoryContents>상담 비용 : </S.CategoryContents>
            </S.ExpertDetail>
          </S.ExpertBody>

          <S.ExpertButtonWrapper>
            <S.ExpertButton>상담하기</S.ExpertButton>
            <S.ExpertButton>리뷰쓰기</S.ExpertButton>
          </S.ExpertButtonWrapper>
        </S.ExpertWrapper>
      </S.CategoryWrapper>

      <S.CategoryWrapper>
        <S.CategoryTitle>활동 기록</S.CategoryTitle>
        <S.HistoryCategoryWrapper>
          <S.HistoryButton>사연 목록</S.HistoryButton>
          <S.HistoryButton>댓글 목록</S.HistoryButton>
          <S.HistoryButton>공감 목록</S.HistoryButton>
        </S.HistoryCategoryWrapper>
        <S.HistoryBody>
          <S.CategoryContents>
            왜 자꾸 기분이 가라앉는지 모르겠어요...
          </S.CategoryContents>
          <S.HistoryInfoWrapper>
            <ImHeart
              style={{ width: "13px", height: "13px", color: "#F293A3" }}
            />
            <S.HistoryInfo>1 명이 공감</S.HistoryInfo>
          </S.HistoryInfoWrapper>
        </S.HistoryBody>
        <S.HistoryBody>
          <S.CategoryContents>
            왜 자꾸 기분이 가라앉는지 모르겠어요...
          </S.CategoryContents>
          <S.HistoryInfoWrapper>
            <ImHeart
              style={{ width: "13px", height: "13px", color: "#F293A3" }}
            />
            <S.HistoryInfo>1 명이 공감</S.HistoryInfo>
          </S.HistoryInfoWrapper>
        </S.HistoryBody>
      </S.CategoryWrapper>
    </S.Wrapper>
  );
}

import * as S from "./my-page.styles";
import { ImHeart } from "react-icons/im";
import { AiOutlineClose, AiOutlineWechat } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { FaLeaf, FaUserEdit } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineRateReview } from "react-icons/md";
import { IMyPagePresenterProps } from "./my-page.types";
import UpdateProfileContainer from "./update-profile/update-profile.container";

export default function MyPagePresenter(props: IMyPagePresenterProps) {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.MyPageTitle>마이 페이지</S.MyPageTitle>
        {!props.profileEdit && (
          <>
            <S.CategoryTitle>아이디</S.CategoryTitle>
            <S.ProfileContents>
              <HiOutlineMail
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight: "7px",
                }}
              />
              {props.UserInfo?.fetchLoginUser.email}
            </S.ProfileContents>
            <S.CategoryTitle>닉네임</S.CategoryTitle>
            <S.ProfileContents>
              <FaLeaf
                style={{
                  width: "15px",
                  height: "15px",
                  color: "#74D579",
                  marginRight: "7px",
                }}
              />
              {props.UserInfo?.fetchLoginUser.nickname}
            </S.ProfileContents>
            <S.CategoryTitle>핸드폰 번호</S.CategoryTitle>
            <S.ProfileContents>
              {props.UserInfo?.fetchLoginUser.phone_number}
            </S.ProfileContents>
            <S.CategoryTitle>보유 포인트</S.CategoryTitle>
            <S.ProfileContents>
              <GrMoney style={{ marginRight: "10px" }} />
              {props.UserInfo?.fetchLoginUser.point} P
            </S.ProfileContents>
            <S.ExpertButtonWrapper>
              <S.ButtonRowWrapper>
                <S.ExpertButton onClick={() => props.setModalIsOpen(true)}>
                  <GrMoney style={{ marginRight: "10px" }} /> 충전하기
                </S.ExpertButton>
                <S.ExpertButton>
                  <GrMoney style={{ marginRight: "10px" }} /> 환불하기
                </S.ExpertButton>
              </S.ButtonRowWrapper>
              <S.ButtonRowWrapper>
                <S.ExpertButton onClick={props.onClickEditButton}>
                  <FaUserEdit style={{ marginRight: "7px" }} />
                  프로필 수정
                </S.ExpertButton>
                <S.ExpertButton>
                  <FaUserEdit style={{ marginRight: "7px" }} />
                  비밀번호 변경
                </S.ExpertButton>
              </S.ButtonRowWrapper>
            </S.ExpertButtonWrapper>
          </>
        )}

        {props.profileEdit && <UpdateProfileContainer></UpdateProfileContainer>}
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
          <option value={100}>5000 포인트</option>
          <option value={10000}>10,000 포인트</option>
          <option value={50000}>50,000 포인트</option>
          <option value={100000}>100,000 포인트</option>
        </S.ModalSelect>
        <S.ModalChargeButton
          isActive={props.isActive}
          onClick={props.onClickChargePoint}
        >
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
            <S.ButtonRowWrapper>
              <S.ExpertButton>
                <AiOutlineWechat
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "7px",
                  }}
                />
                상담하기
              </S.ExpertButton>
              <S.ExpertButton>
                <MdOutlineRateReview
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "7px",
                  }}
                />
                리뷰쓰기
              </S.ExpertButton>
            </S.ButtonRowWrapper>
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
            <S.ButtonRowWrapper>
              <S.ExpertButton>
                <AiOutlineWechat
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "7px",
                  }}
                />
                상담하기
              </S.ExpertButton>
              <S.ExpertButton>
                <MdOutlineRateReview
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "7px",
                  }}
                />
                리뷰쓰기
              </S.ExpertButton>
            </S.ButtonRowWrapper>
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

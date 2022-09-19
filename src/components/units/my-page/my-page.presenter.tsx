import * as S from "./my-page.styles";
import { AiOutlineClose, AiFillPhone } from "react-icons/ai";
import { FaHeartbeat } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiWon } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IMyPagePresenterProps } from "./my-page.types";
import UpdateProfileContainer from "./update-profile/update-profile.container";
import BasicButton from "../../commons/button";
import PwdUpdateContainer from "./pwd-update/pwd-update.container";
import { getDate } from "../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";

export default function MyPagePresenter(props: IMyPagePresenterProps) {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.MyPageTitle>마이페이지</S.MyPageTitle>
        {!props.profileEdit && !props.pwdEdit && (
          <>
            <S.ProfileContentsWrapper>
              <S.ProfileBody>
                <S.CategoryTitle>
                  <HiMail
                    style={{
                      width: "25px",
                      height: "23px",
                      marginRight: "5px",
                      color: "#808080",
                    }}
                  />
                  아이디
                </S.CategoryTitle>
                <S.ProfileContents>
                  {props.UserInfo?.fetchLoginUser.email}
                </S.ProfileContents>
              </S.ProfileBody>
              <S.ProfileBody>
                <S.CategoryTitle>
                  <BsFillPersonFill
                    style={{
                      width: "25px",
                      height: "23px",
                      marginRight: "5px",
                      color: "#808080",
                    }}
                  />
                  닉네임
                </S.CategoryTitle>
                <S.ProfileContents>
                  {props.UserInfo?.fetchLoginUser.nickname}
                </S.ProfileContents>
              </S.ProfileBody>
              <S.ProfileBody>
                <S.CategoryTitle>
                  <AiFillPhone
                    style={{
                      width: "25px",
                      height: "23px",
                      marginRight: "5px",
                      color: "#808080",
                    }}
                  />
                  핸드폰
                </S.CategoryTitle>
                <S.ProfileContents>
                  {props.UserInfo?.fetchLoginUser.phone_number}
                </S.ProfileContents>
              </S.ProfileBody>
              <S.PointBody>
                <S.CategoryTitle>
                  <BiWon
                    style={{
                      width: "25px",
                      height: "23px",
                      marginRight: "5px",
                      color: "#808080",
                    }}
                  />
                  포인트
                </S.CategoryTitle>
                <S.PointContents>
                  {props.UserInfo?.fetchLoginUser.point} P
                </S.PointContents>
                <S.PointButtonWrapper>
                  <BasicButton
                    title="충전"
                    onClick={() => props.setModalIsOpen(true)}
                  ></BasicButton>
                  <BasicButton title="환불"></BasicButton>
                </S.PointButtonWrapper>
              </S.PointBody>
            </S.ProfileContentsWrapper>
            <S.ButtonWrapper>
              <BasicButton
                title="프로필수정"
                onClick={props.onClickEditButton}
              ></BasicButton>
              <BasicButton
                title="비밀번호수정"
                onClick={props.onClickPwdButton}
              ></BasicButton>
            </S.ButtonWrapper>
          </>
        )}

        {props.profileEdit && <UpdateProfileContainer></UpdateProfileContainer>}

        {props.pwdEdit && <PwdUpdateContainer></PwdUpdateContainer>}
      </S.ProfileWrapper>

      <S.ModalStyle isOpen={props.modalIsOpen}>
        <S.ModalCloseButton>
          <AiOutlineClose
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            onClick={() => props.setModalIsOpen(false)}
          />
        </S.ModalCloseButton>
        <S.ModalTitle>
          <BiWon
            style={{
              marginRight: "7px",
              border: "1px solid #fff",
              borderRadius: "20px",
            }}
          />
          포인트 충전하기
        </S.ModalTitle>
        <S.ModalSelect
          value={props.selected}
          onChange={props.onChangeSelectedPoint}
        >
          <option value="">충전 포인트 선택</option>
          <option value={5000}>5000 포인트</option>
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

      <S.MyPageSubTitle>내 전문가</S.MyPageSubTitle>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.FetchMoreTicketData}
        hasMore={true}
        useWindow={false}
      >
        <S.InfiniteWrapper>
          {props.TicketData?.fetchOwnTickets.map((el) => (
            <div key={el.id}>
              <S.ExpertListWrapper>
                <S.ExpertWrapper>
                  <S.ExpertBody>
                    <S.ExpertPhoto
                      src={
                        el.specialist.imgUrl
                          ? el.specialist.imgUrl
                          : "/expert-profile.png/"
                      }
                    ></S.ExpertPhoto>
                    <S.ExpertDetail>
                      <S.ProfileBody>
                        <S.CategoryTitle>이름</S.CategoryTitle>
                        <S.ProfileContents>
                          {el.specialist.name}
                        </S.ProfileContents>
                      </S.ProfileBody>
                      <S.ExpertDetailWrapper>
                        <S.CategoryTitle>소개</S.CategoryTitle>
                        <S.ProfileContents>
                          {el.specialist.summary}
                        </S.ProfileContents>
                      </S.ExpertDetailWrapper>
                      <S.ProfileBody>
                        <S.CategoryTitle>비용</S.CategoryTitle>
                        <S.ProfileContents>
                          {el.specialist.price.toLocaleString()}원
                        </S.ProfileContents>
                      </S.ProfileBody>
                    </S.ExpertDetail>
                  </S.ExpertBody>

                  <S.ExpertButtonWrapper>
                    <BasicButton title="상담하기"></BasicButton>
                    <BasicButton
                      title="리뷰쓰기"
                      onClick={() => props.setReviewModalIsOpen(true)}
                    ></BasicButton>
                  </S.ExpertButtonWrapper>
                  <S.BottomWrapper>
                    <S.BottomInfoTitle>구매날짜 :</S.BottomInfoTitle>
                    <S.BottomInfo>{getDate(el.createdAt)}</S.BottomInfo>
                    <S.BottomInfoTitle>만료날짜 :</S.BottomInfoTitle>
                    <S.BottomInfo>{getDate(el.expired)}</S.BottomInfo>
                  </S.BottomWrapper>
                </S.ExpertWrapper>
              </S.ExpertListWrapper>

              <S.ReviewModal isOpen={props.reviewModalIsOpen}>
                <S.ReviewModalCloseButton>
                  <S.ReviewModalTitle>후기 작성하기</S.ReviewModalTitle>
                  <AiOutlineClose
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                    onClick={() => props.setReviewModalIsOpen(false)}
                  />
                </S.ReviewModalCloseButton>
                <S.ModalBottomWrapper>
                  <S.ModalExpertBody>
                    <S.ExpertPhoto
                      src={
                        el.specialist.imgUrl
                          ? el.specialist.imgUrl
                          : "/expert-profile.png/"
                      }
                    ></S.ExpertPhoto>
                    <S.ModalExpertDetail>
                      <S.ModalExpertProfile>
                        <S.ModalExpertTitle>이름</S.ModalExpertTitle>
                        <S.ModalExpertContents>
                          {el.specialist.name}
                        </S.ModalExpertContents>
                      </S.ModalExpertProfile>
                      <S.ModalExpertProfile>
                        <S.ModalExpertTitle>소개</S.ModalExpertTitle>
                        <S.ModalExpertContents>
                          {el.specialist.summary}
                        </S.ModalExpertContents>
                      </S.ModalExpertProfile>
                    </S.ModalExpertDetail>
                  </S.ModalExpertBody>

                  <S.ModalExpertBody>
                    <S.ReviewWrapper>
                      <S.ReviewRate
                        allowHalf
                        onChange={props.onChangeRate}
                      ></S.ReviewRate>
                      <S.ReviewContents
                        onChange={props.onChangeReview}
                      ></S.ReviewContents>
                      <S.ReviewError>{props.textError}</S.ReviewError>
                    </S.ReviewWrapper>
                  </S.ModalExpertBody>
                  <S.ModalButtonWrapper>
                    <S.ModalReviewButton
                      id={el.specialist.id}
                      isActive={props.reviewIsActive}
                      onClick={props.onClickReviewSubmit}
                    >
                      작성하기
                    </S.ModalReviewButton>
                  </S.ModalButtonWrapper>
                </S.ModalBottomWrapper>
              </S.ReviewModal>
            </div>
          ))}
        </S.InfiniteWrapper>
      </InfiniteScroll>

      <S.MyPageSubTitle>활동 기록</S.MyPageSubTitle>
      <S.HistoryCategoryWrapper>
        <S.CommunityButton
          community={props.community}
          onClick={props.onClickCommunity}
        >
          사연 목록
        </S.CommunityButton>
        <S.CommentButton comment={props.comment} onClick={props.onClickComment}>
          댓글 목록
        </S.CommentButton>
        <S.LikeButton like={props.like} onClick={props.onClickLike}>
          공감 목록
        </S.LikeButton>
      </S.HistoryCategoryWrapper>

      {props.community && (
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreCommunityData}
          hasMore={true}
          useWindow={false}
        >
          <S.CategoryWrapper>
            {props.communityData?.fetchOwnStories.map((el) => (
              <S.HistoryBody
                key={el.id}
                onClick={props.onClickMoveToDetailCommunity}
              >
                <S.HistoryContents>{el.title}</S.HistoryContents>
                <S.HistoryInfoWrapper>
                  <FaHeartbeat
                    style={{ width: "27px", height: "23px", color: "#73bea8" }}
                  />
                  <S.HistoryInfo>{el.likes} 명 공감</S.HistoryInfo>
                </S.HistoryInfoWrapper>
              </S.HistoryBody>
            ))}
          </S.CategoryWrapper>
        </InfiniteScroll>
      )}

      {props.comment && (
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreCommentData}
          hasMore={true}
          useWindow={false}
        >
          <S.CategoryWrapper>
            {props.commentData?.fetchOwnComments.map((el) => (
              <S.HistoryBody
                key={el.id}
                onClick={props.onClickMoveToDetailCommunity}
              >
                <S.HistoryContents>{el.text}</S.HistoryContents>
                <S.HistoryInfoWrapper>
                  <FaHeartbeat
                    style={{ width: "27px", height: "23px", color: "#73bea8" }}
                  />
                  <S.HistoryInfo>1 명 공감</S.HistoryInfo>
                </S.HistoryInfoWrapper>
              </S.HistoryBody>
            ))}
          </S.CategoryWrapper>
        </InfiniteScroll>
      )}

      {props.like && (
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreLikeData}
          hasMore={true}
          useWindow={false}
        >
          <S.CategoryWrapper>
            {props.likeData?.fetchOwnLikedStories.map((el) => (
              <S.HistoryBody
                key={el.id}
                onClick={props.onClickMoveToDetailCommunity}
              >
                <S.HistoryContents>{el.title}</S.HistoryContents>
                <S.HistoryInfoWrapper>
                  <FaHeartbeat
                    style={{ width: "27px", height: "23px", color: "#73bea8" }}
                  />
                  <S.HistoryInfo>{el.likes} 명 공감</S.HistoryInfo>
                </S.HistoryInfoWrapper>
              </S.HistoryBody>
            ))}
          </S.CategoryWrapper>
        </InfiniteScroll>
      )}
    </S.Wrapper>
  );
}

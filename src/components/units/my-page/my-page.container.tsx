import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { profileEditState, pwdEditState } from "../../../commons/store";
import { IMutation, IQuery } from "../../../commons/types/generated/types";
import MyPagePresenter from "./my-page.presenter";
import {
  CREATE_PAYMENT,
  CREATE_SPECIALIST_REVIEW,
  FETCH_LOGIN_USER,
  FETCH_OWN_COMMENTS,
  FETCH_OWN_LIKED_STORIES,
  FETCH_OWN_STORIES,
  FETCH_OWN_TICKETS,
} from "./my-page.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyPageContainer() {
  const router = useRouter();

  const UserInfo = getUserInfo();

  // 충전하기 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [createPayment] =
    useMutation<Pick<IMutation, "createPayment">>(CREATE_PAYMENT);

  const onChangeSelectedPoint = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(parseInt(event.target.value));

    if (!event.target.value) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const onClickChargePoint = () => {
    const IMP = window.IMP;

    IMP.init("imp88117825");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "LookAtMe 포인트 충전",
        amount: selected,
        buyer_email: UserInfo?.fetchLoginUser.email,
        buyer_name: UserInfo?.fetchLoginUser.nickname,
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 구로구",
        buyer_postcode: "01181",
        m_redirect_url: `http://localhost:3000/my-page`,
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPayment({
            variables: { impUid: rsp.imp_uid, amount: selected },
            refetchQueries: [{ query: FETCH_LOGIN_USER }],
          });
          setModalIsOpen(false);
          router.push(`/my-page/`);
          message.success("결제가 완료되었습니다.");
        } else {
          message.error("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  // 프로필 수정 버튼
  const [profileEdit, setProfileEdit] = useRecoilState(profileEditState);

  const onClickEditButton = () => {
    setProfileEdit(true);
  };

  // 비밀번호 수정 버튼
  const [pwdEdit, setPwdEdit] = useRecoilState(pwdEditState);

  const onClickPwdButton = () => {
    setPwdEdit(true);
  };

  // 내 전문가 (티켓 목록)
  const { data: TicketData, fetchMore: ticketFetchMore } = useQuery<
    Pick<IQuery, "fetchOwnTickets">
  >(FETCH_OWN_TICKETS, { variables: { page: 0 } });

  const FetchMoreTicketData = () => {
    if (!TicketData) return;

    ticketFetchMore({
      variables: {
        page: Math.ceil(TicketData.fetchOwnTickets.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchOwnTickets) {
          return { fetchOwnTickets: [...prev.fetchOwnTickets] };
        }

        return {
          fetchOwnTickets: [
            ...prev.fetchOwnTickets,
            ...fetchMoreResult.fetchOwnTickets,
          ],
        };
      },
    });
  };

  // 후기 작성 모달
  const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);
  const [rate, setRate] = useState(5);
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");
  const [reviewIsActive, setReviewIsActive] = useState(false);

  const [createSpecialistReview] = useMutation<
    Pick<IMutation, "createSpecialistReview">
  >(CREATE_SPECIALIST_REVIEW);

  const onChangeRate = (rate: SetStateAction<number>) => {
    setRate(rate);

    if (rate && text) {
      setReviewIsActive(true);
    } else {
      setReviewIsActive(false);
    }
  };

  const onChangeReview = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);

    if (!event.target.value) {
      setTextError("리뷰를 입력하세요");
    } else {
      setTextError("");
    }

    if (rate && event.target.value) {
      setReviewIsActive(true);
    } else {
      setReviewIsActive(false);
    }
  };

  const onClickReviewSubmit = async () => {
    try {
      await createSpecialistReview({
        variables: {
          createSpecialistReviewInput: {
            text,
            rate,
          },
        },
      });
    } catch (error) {
      Modal.error({ content: message.error });
    }
  };

  // 활동기록
  const [community, setCommunity] = useState(true);
  const [comment, setComment] = useState(false);
  const [like, setLike] = useState(false);

  const {
    data: communityData,
    refetch: communityRefetch,
    fetchMore: communityFetchMore,
  } = useQuery<Pick<IQuery, "fetchOwnStories">>(FETCH_OWN_STORIES, {
    variables: { page: 0 },
  });

  const FetchMoreCommunityData = () => {
    if (!communityData) return;

    communityFetchMore({
      variables: {
        page: Math.ceil(communityData.fetchOwnStories.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchOwnStories) {
          return { fetchOwnStories: [...prev.fetchOwnStories] };
        }

        return {
          fetchOwnStories: [
            ...prev.fetchOwnStories,
            ...fetchMoreResult.fetchOwnStories,
          ],
        };
      },
    });
  };

  const {
    data: commentData,
    refetch: commentRefetch,
    fetchMore: commentFetchMore,
  } = useQuery<Pick<IQuery, "fetchOwnComments">>(FETCH_OWN_COMMENTS, {
    variables: { page: 0 },
  });

  const FetchMoreCommentData = () => {
    if (!commentData) return;

    commentFetchMore({
      variables: {
        page: Math.ceil(commentData?.fetchOwnComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchOwnComments) {
          return { fetchOwnComments: [...prev.fetchOwnComments] };
        }

        return {
          fetchOwnComments: [
            ...prev.fetchOwnComments,
            ...fetchMoreResult.fetchOwnComments,
          ],
        };
      },
    });
  };

  const {
    data: likeData,
    refetch: likeRefetch,
    fetchMore: likeFetchMore,
  } = useQuery<Pick<IQuery, "fetchOwnLikedStories">>(FETCH_OWN_LIKED_STORIES, {
    variables: { page: 0 },
  });

  const FetchMoreLikeData = () => {
    if (!likeData) return;

    likeFetchMore({
      variables: {
        page: Math.ceil(likeData?.fetchOwnLikedStories.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchOwnLikedStories) {
          return { fetchOwnLikedStories: [...prev.fetchOwnLikedStories] };
        }

        return {
          fetchOwnLikedStories: [
            ...prev.fetchOwnLikedStories,
            ...fetchMoreResult.fetchOwnLikedStories,
          ],
        };
      },
    });
  };

  const onClickCommunity = () => {
    communityRefetch();
    setCommunity(true);
    setComment(false);
    setLike(false);
  };

  const onClickComment = () => {
    commentRefetch();
    setCommunity(false);
    setComment(true);
    setLike(false);
  };

  const onClickLike = () => {
    likeRefetch();
    setCommunity(false);
    setComment(false);
    setLike(true);
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <MyPagePresenter
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        selected={selected}
        isActive={isActive}
        onChangeSelectedPoint={onChangeSelectedPoint}
        onClickChargePoint={onClickChargePoint}
        UserInfo={UserInfo}
        profileEdit={profileEdit}
        onClickEditButton={onClickEditButton}
        pwdEdit={pwdEdit}
        onClickPwdButton={onClickPwdButton}
        TicketData={TicketData}
        FetchMoreTicketData={FetchMoreTicketData}
        reviewModalIsOpen={reviewModalIsOpen}
        setReviewModalIsOpen={setReviewModalIsOpen}
        rate={rate}
        textError={textError}
        onChangeRate={onChangeRate}
        onChangeReview={onChangeReview}
        reviewIsActive={reviewIsActive}
        onClickReviewSubmit={onClickReviewSubmit}
        community={community}
        comment={comment}
        like={like}
        communityData={communityData}
        FetchMoreCommunityData={FetchMoreCommunityData}
        commentData={commentData}
        FetchMoreCommentData={FetchMoreCommentData}
        likeData={likeData}
        FetchMoreLikeData={FetchMoreLikeData}
        onClickCommunity={onClickCommunity}
        onClickComment={onClickComment}
        onClickLike={onClickLike}
      ></MyPagePresenter>
    </>
  );
}

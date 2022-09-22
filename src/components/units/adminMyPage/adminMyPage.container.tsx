import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { IMutation, IQuery } from "../../../commons/types/generated/types";
import AdminMyPageUI from "./adminMyPage.presenter";
import {
  CREATE_QUOTE,
  CREATE_SPECIALIST,
  DELETE_QUOTE,
  DELETE_REPORTED_STORY,
  DELETE_SPECIALIST,
  FETCH_QUOTES,
  FETCH_REPORTED_STORIES,
  FETCH_SPECIALISTS,
  FETCH_STORIES_BY_TIME,
  START_QUOTE,
  STOP_QUOTE,
  UPLOAD_FILE,
} from "./adminMyPage.queries";

export default function AdminMyPageContainer() {
  // 명언

  const [startQuote] = useMutation(START_QUOTE);
  const [stopQuote] = useMutation(STOP_QUOTE);

  const { data: QuoteData, fetchMore: QuoteFetchMore } = useQuery<
    Pick<IQuery, "fetchQuotes">
  >(FETCH_QUOTES, { variables: { page: 0 } });

  const FetchMoreQuote = () => {
    if (!QuoteData) return;

    QuoteFetchMore({
      variables: {
        page: Math.ceil(QuoteData.fetchQuotes.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchQuotes) {
          return {
            fetchQuotes: [...prev.fetchQuotes],
          };
        }

        return {
          fetchQuotes: [...prev.fetchQuotes, ...fetchMoreResult.fetchQuotes],
        };
      },
    });
  };

  const onClickStart = async () => {
    try {
      await startQuote();
      Modal.success({ content: "명언 시작" });
      console.log("123");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickStop = async () => {
    try {
      await stopQuote();
      Modal.success({ content: "명언 정지" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const [quoteModalIsOpen, setQuoteModalIsOpen] = useState(false);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const [createQuote] =
    useMutation<Pick<IMutation, "createQuote">>(CREATE_QUOTE);
  const [deleteQuote] =
    useMutation<Pick<IMutation, "deleteQuote">>(DELETE_QUOTE);

  const onChangeAuthor = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const onClickCreateQuote = async () => {
    if (!author && !message) return;
    try {
      await createQuote({
        variables: {
          createQuoteInput: {
            author,
            message,
          },
        },
        refetchQueries: [{ query: FETCH_QUOTES, variables: { page: 0 } }],
      });
      Modal.success({ content: "명언 생성이 완료되었습니다." });
      setQuoteModalIsOpen(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDeleteQuote = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await deleteQuote({
        variables: { id: event.target.id },
        refetchQueries: [{ query: FETCH_QUOTES, variables: { page: 0 } }],
      });
      Modal.success({ content: "명언 삭제가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 신고목록
  const { data: ReportedData, fetchMore: ReportedFetchMore } = useQuery<
    Pick<IQuery, "fetchReportedStories">
  >(FETCH_REPORTED_STORIES, { variables: { page: 0 } });

  const FetchMoreReported = () => {
    if (!ReportedData) return;

    ReportedFetchMore({
      variables: {
        page: Math.ceil(ReportedData.fetchReportedStories.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchReportedStories) {
          return {
            fetchReportedStories: [...prev.fetchReportedStories],
          };
        }

        return {
          fetchReportedStories: [
            ...prev.fetchReportedStories,
            ...fetchMoreResult.fetchReportedStories,
          ],
        };
      },
    });
  };

  const [deleteReportedStory] = useMutation(DELETE_REPORTED_STORY);

  const onClickDeleteReportedStory = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    try {
      await deleteReportedStory({
        variables: {
          id: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_REPORTED_STORIES,
            variables: { page: 0 },
          },
        ],
      });
      Modal.success({ content: "게시글 삭제가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 전문가 목록
  const { data: SpecialistData, fetchMore: SpecialistFetchMore } = useQuery<
    Pick<IQuery, "fetchSpecialists">
  >(FETCH_SPECIALISTS, { variables: { page: 0 } });

  const FetchMoreSpecialist = () => {
    if (!SpecialistData) return;

    SpecialistFetchMore({
      variables: {
        page: Math.ceil(SpecialistData.fetchSpecialists.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchSpecialists) {
          return {
            fetchSpecialists: [...prev.fetchSpecialists],
          };
        }

        return {
          fetchSpecialists: [
            ...prev.fetchSpecialists,
            ...fetchMoreResult.fetchSpecialists,
          ],
        };
      },
    });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [, setIsActive] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [career, setCareer] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");

  const [createSpecialist] =
    useMutation<Pick<IMutation, "createSpecialist">>(CREATE_SPECIALIST);

  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">>(UPLOAD_FILE);

  const onClickCreateSpecialist = () => {
    setModalIsOpen(true);
  };

  const onChangeAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeSummary = (event: ChangeEvent<HTMLInputElement>) => {
    setSummary(event.target.value);
  };

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const onChangeIntroduction = (event: ChangeEvent<HTMLInputElement>) => {
    setIntroduction(event.target.value);
  };

  const onChangeCareer = (event: ChangeEvent<HTMLInputElement>) => {
    setCareer(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file } });
      setImgUrl(result.data?.uploadFile || "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickSpecialistSubmitButton = async () => {
    if (!account && !password && !name && !summary && !price && !imgUrl) return;
    try {
      await createSpecialist({
        variables: {
          createSpecialistInput: {
            account,
            password,
            name,
            summary,
            introduction,
            career,
            price,
            imgUrl,
          },
        },
        refetchQueries: [{ query: FETCH_SPECIALISTS, variables: { page: 0 } }],
      });
      setIsActive(true);
      Modal.success({ content: "전문가 생성이 완료되었습니다." });
      setModalIsOpen(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const [deleteSpecialist] =
    useMutation<Pick<IMutation, "deleteSpecialist">>(DELETE_SPECIALIST);

  const onClickDeleteSpecialist = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    try {
      await deleteSpecialist({
        variables: { id: event.target.id },
        refetchQueries: [
          {
            query: FETCH_SPECIALISTS,
            variables: { page: 0 },
          },
        ],
      });
      Modal.success({ content: "전문가 삭제가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 게시글 관리
  const { data: CommunityData, fetchMore: CommunityFetchMore } = useQuery<
    Pick<IQuery, "fetchStoriesByTime">
  >(FETCH_STORIES_BY_TIME, { variables: { page: 0 } });

  const FetchMoreCommunityFetchMore = () => {
    if (!CommunityData) return;

    CommunityFetchMore({
      variables: {
        page: Math.ceil(CommunityData.fetchStoriesByTime.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchStoriesByTime) {
          return {
            fetchStoriesByTime: [...prev.fetchStoriesByTime],
          };
        }

        return {
          fetchStoriesByTime: [
            ...prev.fetchStoriesByTime,
            ...fetchMoreResult.fetchStoriesByTime,
          ],
        };
      },
    });
  };

  const onClickDeleteCommunity = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event.target.id);
    try {
      deleteReportedStory({
        variables: {
          id: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_STORIES_BY_TIME,
            variables: { page: 0 },
          },
        ],
      });
      Modal.success({ content: "게시글 삭제가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <AdminMyPageUI
      QuoteData={QuoteData}
      FetchMoreQuote={FetchMoreQuote}
      onClickStart={onClickStart}
      onClickStop={onClickStop}
      quoteModalIsOpen={quoteModalIsOpen}
      setQuoteModalIsOpen={setQuoteModalIsOpen}
      onChangeAuthor={onChangeAuthor}
      onChangeMessage={onChangeMessage}
      onClickCreateQuote={onClickCreateQuote}
      onClickDeleteQuote={onClickDeleteQuote}
      ReportedData={ReportedData}
      FetchMoreReported={FetchMoreReported}
      onClickDeleteReportedStory={onClickDeleteReportedStory}
      SpecialistData={SpecialistData}
      FetchMoreSpecialist={FetchMoreSpecialist}
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
      onClickCreateSpecialist={onClickCreateSpecialist}
      onChangeAccount={onChangeAccount}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onChangeSummary={onChangeSummary}
      onChangeIntroduction={onChangeIntroduction}
      onChangeCareer={onChangeCareer}
      onChangePrice={onChangePrice}
      onChangeFile={onChangeFile}
      onClickSpecialistSubmitButton={onClickSpecialistSubmitButton}
      onClickDeleteSpecialist={onClickDeleteSpecialist}
      CommunityData={CommunityData}
      FetchMoreCommunityFetchMore={FetchMoreCommunityFetchMore}
      onClickDeleteCommunity={onClickDeleteCommunity}
    />
  );
}

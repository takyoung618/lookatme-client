import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchStoriesByCommentArgs,
  IQueryFetchStoriesByLikeArgs,
  IQueryFetchStoriesByTimeArgs,
} from "../../../commons/types/generated/types";
import CommunityListPresenter from "./community-list.presenter";
import {
  FETCH_STORIES_BY_COMMENT,
  FETCH_STORIES_BY_LIKE,
  FETCH_STORIES_BY_TIME,
} from "./community-list.queries";

export default function CommunityListContainer() {
  const router = useRouter();

  const [total, setTotal] = useState(true);
  const [job, setJob] = useState(false);
  const [love, setLove] = useState(false);
  const [person, setPerson] = useState(false);
  const [mySelf, setMySelf] = useState(false);
  const [family, setFamily] = useState(false);
  const [free, setFree] = useState(false);

  const [time, setTime] = useState(true);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);

  // 시간순 query, 무한스크롤용 fetchMore
  const {
    data: timeData,
    refetch: timeRefetch,
    fetchMore: timeFetchMore,
  } = useQuery<
    Pick<IQuery, "fetchStoriesByTime">,
    IQueryFetchStoriesByTimeArgs
  >(FETCH_STORIES_BY_TIME, {
    variables: { page: 0 },
    fetchPolicy: "network-only",
  });

  const FetchMoreTimeData = () => {
    if (!timeData) return;

    timeFetchMore({
      variables: {
        page: Math.ceil(timeData?.fetchStoriesByTime.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (prev.fetchStoriesByTime === undefined) {
          return {
            fetchStoriesByTime: [],
          };
        }

        if (!fetchMoreResult.fetchStoriesByTime) {
          return { fetchStoriesByTime: [...prev.fetchStoriesByTime] };
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

  // 좋아요순 query, 무한스크롤용 fetchMore
  const {
    data: likeData,
    refetch: likeRefetch,
    fetchMore: likeFetchMore,
  } = useQuery<
    Pick<IQuery, "fetchStoriesByLike">,
    IQueryFetchStoriesByLikeArgs
  >(FETCH_STORIES_BY_LIKE, {
    variables: { page: 0 },
    fetchPolicy: "network-only",
  });

  const FetchMoreLikeData = () => {
    if (!likeData) return;

    likeFetchMore({
      variables: {
        page: Math.ceil(likeData?.fetchStoriesByLike.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (prev.fetchStoriesByLike === undefined) {
          return {
            fetchStoriesByLike: [],
          };
        }

        if (!fetchMoreResult.fetchStoriesByLike) {
          return { fetchStoriesByLike: [...prev.fetchStoriesByLike] };
        }

        return {
          fetchStoriesByLike: [
            ...prev.fetchStoriesByLike,
            ...fetchMoreResult.fetchStoriesByLike,
          ],
        };
      },
    });
  };

  // 댓글순 query, 무한스크롤용 fetchMore
  const {
    data: commentData,
    refetch: commentRefetch,
    fetchMore: commentFetchMore,
  } = useQuery<
    Pick<IQuery, "fetchStoriesByComment">,
    IQueryFetchStoriesByCommentArgs
  >(FETCH_STORIES_BY_COMMENT, {
    variables: { page: 0 },
    fetchPolicy: "network-only",
  });

  const FetchMoreCommentData = () => {
    if (!commentData) return;

    commentFetchMore({
      variables: {
        page: Math.ceil(commentData?.fetchStoriesByComment.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (prev.fetchStoriesByComment === undefined) {
          return {
            fetchStoriesByComment: [],
          };
        }

        if (!fetchMoreResult.fetchStoriesByComment) {
          return { fetchStoriesByComment: [...prev.fetchStoriesByComment] };
        }

        return {
          fetchStoriesByComment: [
            ...prev.fetchStoriesByComment,
            ...fetchMoreResult.fetchStoriesByComment,
          ],
        };
      },
    });
  };

  const onClickTotal = () => {
    timeRefetch({
      categoryName: "",
    });

    likeRefetch({
      categoryName: "",
    });

    commentRefetch({
      categoryName: "",
    });

    setTotal(true);
    setJob(false);
    setLove(false);
    setPerson(false);
    setMySelf(false);
    setFamily(false);
    setFree(false);
  };

  const onClickJob = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      timeRefetch({
        categoryName: event.target.id,
      });

    if (event.target instanceof Element)
      likeRefetch({
        categoryName: event.target.id,
      });

    if (event.target instanceof Element)
      commentRefetch({
        categoryName: event.target.id,
      });

    setTotal(false);
    setJob(true);
    setLove(false);
    setPerson(false);
    setMySelf(false);
    setFamily(false);
    setFree(false);
  };

  const onClickLove = (event: MouseEvent<HTMLDivElement>) => {
    timeRefetch({
      categoryName: event.target.id,
    });

    likeRefetch({
      categoryName: event.target.id,
    });

    commentRefetch({
      categoryName: event.target.id,
    });

    setTotal(false);
    setJob(false);
    setLove(true);
    setPerson(false);
    setMySelf(false);
    setFamily(false);
    setFree(false);
  };

  const onClickPerson = (event: MouseEvent<HTMLDivElement>) => {
    timeRefetch({
      categoryName: event.target.id,
    });

    likeRefetch({
      categoryName: event.target.id,
    });

    commentRefetch({
      categoryName: event.target.id,
    });

    setTotal(false);
    setJob(false);
    setLove(false);
    setPerson(true);
    setMySelf(false);
    setFamily(false);
    setFree(false);
  };

  const onClickMySelf = (event: MouseEvent<HTMLDivElement>) => {
    timeRefetch({
      categoryName: event.target.id,
    });

    likeRefetch({
      categoryName: event.target.id,
    });

    commentRefetch({
      categoryName: event.target.id,
    });

    setTotal(false);
    setJob(false);
    setLove(false);
    setPerson(false);
    setMySelf(true);
    setFamily(false);
    setFree(false);
  };

  const onClickFamily = (event: MouseEvent<HTMLDivElement>) => {
    timeRefetch({
      categoryName: event.target.id,
    });

    likeRefetch({
      categoryName: event.target.id,
    });

    commentRefetch({
      categoryName: event.target.id,
    });

    setTotal(false);
    setJob(false);
    setLove(false);
    setPerson(false);
    setMySelf(false);
    setFamily(true);
    setFree(false);
  };

  const onClickFree = (event: MouseEvent<HTMLDivElement>) => {
    timeRefetch({
      categoryName: event.target.id,
    });

    likeRefetch({
      categoryName: event.target.id,
    });

    commentRefetch({
      categoryName: event.target.id,
    });

    setTotal(false);
    setJob(false);
    setLove(false);
    setPerson(false);
    setMySelf(false);
    setFamily(false);
    setFree(true);
  };

  const onClickTime = () => {
    setTime(true);
    setLike(false);
    setComment(false);
  };

  const onClickLike = () => {
    setTime(false);
    setLike(true);
    setComment(false);
  };

  const onClickComment = () => {
    setTime(false);
    setLike(false);
    setComment(true);
  };

  const onClickWriteButton = () => {
    router.push("/community/new/");
  };

  return (
    <CommunityListPresenter
      total={total}
      job={job}
      love={love}
      person={person}
      mySelf={mySelf}
      family={family}
      free={free}
      time={time}
      like={like}
      comment={comment}
      onClickTotal={onClickTotal}
      onClickJob={onClickJob}
      onClickLove={onClickLove}
      onClickPerson={onClickPerson}
      onClickMySelf={onClickMySelf}
      onClickFamily={onClickFamily}
      onClickFree={onClickFree}
      onClickTime={onClickTime}
      onClickLike={onClickLike}
      onClickComment={onClickComment}
      onClickWriteButton={onClickWriteButton}
      timeData={timeData}
      FetchMoreTimeData={FetchMoreTimeData}
      likeData={likeData}
      FetchMoreLikeData={FetchMoreLikeData}
      commentData={commentData}
      FetchMoreCommentData={FetchMoreCommentData}
    ></CommunityListPresenter>
  );
}

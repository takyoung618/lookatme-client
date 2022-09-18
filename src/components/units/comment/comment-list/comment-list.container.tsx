import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import CommentListPresenter from "./comment-list.presenter";
import {
  FETCH_COMMENTS_WITH_STORY_ID,
  FETCH_SPECIALIST_COMMENTS_WITH_STORY_ID,
} from "./comment-list.queries";

export default function CommentListContainer() {
  const router = useRouter();

  const { data: UserCommentData, fetchMore: UserCommentFetchMore } = useQuery<
    Pick<IQuery, "fetchCommentsWithStoryId">
  >(FETCH_COMMENTS_WITH_STORY_ID, {
    variables: { storyId: router.query.communityId, page: 0 },
  });

  const FetchMoreUserComments = () => {
    if (!UserCommentData) return;

    UserCommentFetchMore({
      variables: {
        page:
          Math.ceil(UserCommentData.fetchCommentsWithStoryId.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchCommentsWithStoryId: [
            ...prev.fetchCommentsWithStoryId,
            ...fetchMoreResult.fetchCommentsWithStoryId,
          ],
        };
      },
    });
  };

  const { data: SpecialistCommentData, fetchMore: SpecialistCommentFetchMore } =
    useQuery<Pick<IQuery, "fetchSpecialistCommentsWithStoryId">>(
      FETCH_SPECIALIST_COMMENTS_WITH_STORY_ID,
      {
        variables: { storyId: router.query.communityId, page: 0 },
      }
    );

  const FetchMoreSpecialistComments = () => {
    if (!SpecialistCommentData) return;

    SpecialistCommentFetchMore({
      variables: {
        page:
          Math.ceil(
            SpecialistCommentData.fetchSpecialistCommentsWithStoryId.length / 10
          ) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchSpecialistCommentsWithStoryId: [
            ...prev.fetchSpecialistCommentsWithStoryId,
            ...fetchMoreResult.fetchSpecialistCommentsWithStoryId,
          ],
        };
      },
    });
  };

  return (
    <CommentListPresenter
      UserCommentData={UserCommentData}
      FetchMoreUserComments={FetchMoreUserComments}
      SpecialistCommentData={SpecialistCommentData}
      FetchMoreSpecialistComments={FetchMoreSpecialistComments}
    ></CommentListPresenter>
  );
}

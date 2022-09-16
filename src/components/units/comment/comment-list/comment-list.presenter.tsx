import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import CommentEditExpertContainer from "../comment-edit/expert/comment-edit-expert.container";
import CommentEditUserContainer from "../comment-edit/user/comment-edit-user.container";
import { ICommentListPresenterProps } from "./comment-list.types";

const CommentsListWrapper = styled.div`
  width: 100%;
`;

export default function CommentListPresenter(
  props: ICommentListPresenterProps
) {
  return (
    <>
      <CommentsListWrapper>
        <InfiniteScroll>
          <CommentEditExpertContainer></CommentEditExpertContainer>
        </InfiniteScroll>
      </CommentsListWrapper>

      <CommentsListWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreUserComments}
          hasMore={true}
          useWindow={false}
        >
          {props.UserCommentData?.fetchCommentsWithStoryId.map(
            (UserCommentEl) => (
              <CommentEditUserContainer
                key={UserCommentEl.id}
                UserCommentEl={UserCommentEl}
                UserCommentData={props.UserCommentData}
              ></CommentEditUserContainer>
            )
          )}
        </InfiniteScroll>
      </CommentsListWrapper>
    </>
  );
}

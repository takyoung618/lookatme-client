import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import CommentEditExpertContainer from "../comment-edit/expert/comment-edit-expert.container";
import CommentEditUserContainer from "../comment-edit/user/comment-edit-user.container";
import { ICommentListPresenterProps } from "./comment-list.types";

const CommentsListWrapper = styled.div`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  width: 100vw;
  height: 40px;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
  background-color: #f5f5f5;
  font-size: 1.031rem;
  margin-bottom: 20px;
`;

const UserHeader = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  margin-left: 5%;
`;

const ExpertHeader = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  margin-left: 5%;
`;

export default function CommentListPresenter(
  props: ICommentListPresenterProps
) {
  return (
    <>
      <CommentsListWrapper>
        <HeaderWrapper>
          <ExpertHeader>전문가 댓글</ExpertHeader>
        </HeaderWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreSpecialistComments}
          hasMore={true}
          useWindow={false}
        >
          {props.SpecialistCommentData?.fetchSpecialistCommentsWithStoryId.map(
            (SpecialistCommentEl) => (
              <CommentEditExpertContainer
                key={SpecialistCommentEl.id}
                SpecialistCommentEl={SpecialistCommentEl}
                SpecialistCommentData={props.SpecialistCommentData}
              ></CommentEditExpertContainer>
            )
          )}
        </InfiniteScroll>
      </CommentsListWrapper>

      <CommentsListWrapper>
        <HeaderWrapper>
          <UserHeader>일반 댓글</UserHeader>
        </HeaderWrapper>
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

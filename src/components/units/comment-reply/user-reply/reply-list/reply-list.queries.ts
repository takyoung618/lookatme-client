import { gql } from "@apollo/client";

export const FETCH_UNDER_COMMENTS_WITH_COMMENT_ID = gql`
  query fetchUnderCommentsWithCommentId($commentId: String!) {
    fetchUnderCommentsWithCommentId(commentId: $commentId) {
      id
      contents
      createdAt
      user {
        nickname
      }
      comment {
        id
      }
    }
  }
`;

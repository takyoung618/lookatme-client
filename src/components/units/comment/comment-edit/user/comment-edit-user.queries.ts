import { gql } from "@apollo/client";

export const DELETE_OWN_COMMENT = gql`
  mutation deleteOwnComment($commentId: String!) {
    deleteOwnComment(commentId: $commentId)
  }
`;

export const LIKE_COMMENT = gql`
  mutation likeComment($commentId: String!) {
    likeComment(commentId: $commentId) {
      likes
    }
  }
`;

export const REPORT_COMMENT = gql`
  mutation reportComment($commentId: String!) {
    reportComment(commentId: $commentId)
  }
`;

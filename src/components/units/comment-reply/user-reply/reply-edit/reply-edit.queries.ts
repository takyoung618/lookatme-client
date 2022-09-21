import { gql } from "@apollo/client";

export const DELETE_OWN_UNDER_COMMENT = gql`
  mutation deleteOwnUnderComment($underCommentId: String!) {
    deleteOwnUnderComment(underCommentId: $underCommentId)
  }
`;

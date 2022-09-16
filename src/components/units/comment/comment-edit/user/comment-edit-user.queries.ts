import { gql } from "@apollo/client";

export const DELETE_OWN_COMMENT = gql`
  mutation deleteOwnComment($id: String!) {
    deleteOwnComment(id: $id)
  }
`;

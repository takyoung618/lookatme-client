import { gql } from "@apollo/client";

export const DELETE_SPECIALIST_OWN_COMMENT = gql`
  mutation deleteSpecialistOwnComment($specialistCommentId: String!) {
    deleteSpecialistOwnComment(specialistCommentId: $specialistCommentId)
  }
`;

import { gql } from "@apollo/client";

export const DELETE_SPECIALIST_OWN_COMMENT = gql`
  mutation deleteSpecialistOwnComment($specialistCommentId: String!) {
    deleteSpecialistOwnComment(specialistCommentId: $specialistCommentId)
  }
`;

export const REPORT_SPECIALIST_COMMENT = gql`
  mutation reportSpecialistComment($specialistCommentId: String!) {
    reportSpecialistComment(specialistCommentId: $specialistCommentId)
  }
`;

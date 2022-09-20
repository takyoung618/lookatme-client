import { gql } from "@apollo/client";

export const DELETE_UNDER_SPECIALIST_COMMENT = gql`
  mutation deleteUnderSpecialistComment($underSpecialistCommentId: String!) {
    deleteUnderSpecialistComment(
      underSpecialistCommentId: $underSpecialistCommentId
    )
  }
`;

export const REPORT_UNDER_COMMENT = gql`
  mutation reportUnderComment($underCommentId: String!) {
    reportUnderComment(underCommentId: $underCommentId)
  }
`;

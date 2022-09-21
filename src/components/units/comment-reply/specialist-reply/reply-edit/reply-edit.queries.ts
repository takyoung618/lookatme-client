import { gql } from "@apollo/client";

export const DELETE_UNDER_SPECIALIST_COMMENT = gql`
  mutation deleteUnderSpecialistComment($underSpecialistCommentId: String!) {
    deleteUnderSpecialistComment(
      underSpecialistCommentId: $underSpecialistCommentId
    )
  }
`;

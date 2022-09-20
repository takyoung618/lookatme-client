import { gql } from "@apollo/client";

export const FETCH_UNDER_SPECIALIST_COMMENT_WITH_ID = gql`
  query fetchUnderSpecialistCommentWithId($specialistCommentId: String!) {
    fetchUnderSpecialistCommentWithId(
      specialistCommentId: $specialistCommentId
    ) {
      id
      contents
      createdAt
      user {
        nickname
      }
      specialistComment {
        id
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const CREATE_UNDER_SPECIALIST_COMMENT = gql`
  mutation createUnderSpecialistComment(
    $createUnderSpecialistCommentInput: CreateUnderSpecialistCommentInput!
  ) {
    createUnderSpecialistComment(
      createUnderSpecialistCommentInput: $createUnderSpecialistCommentInput
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

export const UPDATE_UNDER_SPECIALIST_COMMENT = gql`
  mutation updateUnderSpecialistComment(
    $updateUnderSpecialistCommentInput: UpdateUnderSpecialistCommentInput!
  ) {
    updateUnderSpecialistComment(
      updateUnderSpecialistCommentInput: $updateUnderSpecialistCommentInput
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

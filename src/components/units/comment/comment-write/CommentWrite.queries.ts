import { gql } from "@apollo/client";

// 일반 유저 댓글
export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      text
      createdAt
      user {
        nickname
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($updateCommentInput: UpdateCommentInput!) {
    updateComment(updateCommentInput: $updateCommentInput) {
      text
      createdAt
      user {
        nickname
      }
    }
  }
`;

// 전문가 댓글
export const CREATE_SPECIALIST_COMMENT = gql`
  mutation createSpecialistComment(
    $createSpecialistCommentInput: CreateSpecialCommentInput!
  ) {
    createSpecialistComment(
      createSpecialistCommentInput: $createSpecialistCommentInput
    ) {
      text
      createdAt
      specialist {
        name
      }
    }
  }
`;

export const UPDATE_SPECIALIST_OWN_COMMENT = gql`
  mutation updateSpecialistComment(
    $updateSpecialistCommentInput: updateSpecialCommentInput!
  ) {
    updateSpecialistComment(
      updateSpecialistCommentInput: $updateSpecialistCommentInput
    ) {
      text
      createdAt
      specialist {
        name
      }
    }
  }
`;

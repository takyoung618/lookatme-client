import { gql } from "@apollo/client";

// 일반 유저 댓글
export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
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
      id
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
    $createSpecialistCommentInput: CreateSpecialistCommentInput!
  ) {
    createSpecialistComment(
      createSpecialistCommentInput: $createSpecialistCommentInput
    ) {
      id
      text
      createdAt
      specialist {
        name
      }
    }
  }
`;

export const UPDATE_SPECIALIST_OWN_COMMENT = gql`
  mutation updateSpecialistOwnComment(
    $updateSpecialistCommentInput: UpdateSpecialistCommentInput!
  ) {
    updateSpecialistOwnComment(
      updateSpecialistCommentInput: $updateSpecialistCommentInput
    ) {
      id
      text
      createdAt
      specialist {
        name
      }
    }
  }
`;

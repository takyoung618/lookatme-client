import { gql } from "@apollo/client";

export const CREATE_UNDER_COMMENT = gql`
  mutation createUnderComment(
    $createUnderCommentInput: CreateUnderCommentInput!
  ) {
    createUnderComment(createUnderCommentInput: $createUnderCommentInput) {
      id
      contents
      createdAt
      user {
        nickname
      }
      comment {
        id
      }
    }
  }
`;

export const UPDATE_OWN_UNDER_COMMENT = gql`
  mutation updateOwnUnderComment(
    $updateUnderCommentInput: UpdateUnderCommentInput!
  ) {
    updateOwnUnderComment(updateUnderCommentInput: $updateUnderCommentInput) {
      contents
      createdAt
      user {
        nickname
      }
      comment {
        id
      }
    }
  }
`;

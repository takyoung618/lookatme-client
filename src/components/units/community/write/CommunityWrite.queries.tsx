import { gql } from "@apollo/client";

export const IS_USER = gql`
  query isUser {
    isUser
  }
`;

export const CREATE_STORY = gql`
  mutation createStory($createStoryInput: CreateStoryInput!) {
    createStory(createStoryInput: $createStoryInput) {
      id
      title
      text
      category {
        id
        name
      }
    }
  }
`;

export const UPDATE_STORY = gql`
  mutation updateStory(
    $updateStoryId: String!
    $updateStoryInput: UpdateStoryInput!
  ) {
    updateStory(
      updateStoryId: $updateStoryId
      updateStoryInput: $updateStoryInput
    ) {
      id
      likes
      title
      text
      isReported
      category {
        name
      }
    }
  }
`;

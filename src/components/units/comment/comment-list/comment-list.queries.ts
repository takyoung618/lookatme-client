import { gql } from "@apollo/client";

export const FETCH_COMMENTS_WITH_STORY_ID = gql`
  query fetchCommentsWithStoryId($storyId: String!, $page: Int!) {
    fetchCommentsWithStoryId(storyId: $storyId, page: $page) {
      id
      text
      createdAt
      user {
        nickname
      }
    }
  }
`;

export const FETCH_SPECIALIST_COMMENTS_WITH_STORY_ID = gql`
  query fetchSpecialistCommentsWithStoryId($storyId: String!, $page: Int!) {
    fetchSpecialistCommentsWithStoryId(storyId: $storyId, page: $page) {
      id
      text
      createdAt
      specialist {
        name
      }
    }
  }
`;

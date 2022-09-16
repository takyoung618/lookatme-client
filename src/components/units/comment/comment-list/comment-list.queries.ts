import { gql } from "@apollo/client";

export const FETCH_COMMENTS_WITH_STORY_ID = gql`
  query fetchCommentsWithStoryId($storyId: String!) {
    fetchCommentsWithStoryId(storyId: $storyId) {
      id
      text
      createdAt
      user {
        nickname
      }
    }
  }
`;

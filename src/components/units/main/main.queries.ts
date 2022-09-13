import { gql } from "@apollo/client";

export const FETCH_BEST_STORIES = gql`
  query {
    fetchBestStories {
      id
      likes
      commentCounts
      title
      text
      user {
        nickname
      }
      createAt
    }
  }
`;

export const FETCH_SPECIAL_LISTS = gql`
  query {
    fetchSpecialists {
      id
      name
      career
      summary
      imgUrl
    }
  }
`;

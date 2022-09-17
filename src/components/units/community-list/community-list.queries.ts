import { gql } from "@apollo/client";

export const FETCH_STORIES_BY_TIME = gql`
  query fetchStoriesByTime($categoryName: String, $page: Int!) {
    fetchStoriesByTime(categoryName: $categoryName, page: $page) {
      id
      likes
      commentCounts
      title
      text
      category {
        name
      }
      user {
        nickname
      }
    }
  }
`;

export const FETCH_STORIES_BY_LIKE = gql`
  query fetchStoriesByLike($categoryName: String, $page: Int!) {
    fetchStoriesByLike(categoryName: $categoryName, page: $page) {
      id
      likes
      commentCounts
      title
      text
      category {
        name
      }
      user {
        nickname
      }
    }
  }
`;

export const FETCH_STORIES_BY_COMMENT = gql`
  query fetchStoriesByComment($categoryName: String, $page: Int!) {
    fetchStoriesByComment(categoryName: $categoryName, page: $page) {
      id
      likes
      commentCounts
      title
      text
      category {
        name
      }
      user {
        nickname
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_QUOTES = gql`
  query fetchQuotes($page: Int!) {
    fetchQuotes(page: $page) {
      id
      author
      message
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation createQuote($createQuoteInput: CreateQuoteInput!) {
    createQuote(createQuoteInput: $createQuoteInput) {
      id
      author
      message
    }
  }
`;

export const DELETE_QUOTE = gql`
  mutation deleteQuote($id: String!) {
    deleteQuote(id: $id)
  }
`;

export const FETCH_REPORTED_STORIES = gql`
  query fetchReportedStories($page: Int!) {
    fetchReportedStories(page: $page) {
      id
      title
      user {
        nickname
      }
      createAt
    }
  }
`;

export const DELETE_REPORTED_STORY = gql`
  mutation deleteReportedStory($id: String!) {
    deleteReportedStory(id: $id)
  }
`;

export const FETCH_SPECIALISTS = gql`
  query fetchSpecialists($page: Int) {
    fetchSpecialists(page: $page) {
      id
      account
      name
      price
    }
  }
`;

export const CREATE_SPECIALIST = gql`
  mutation createSpecialist($createSpecialistInput: CreateSpecialistInput!) {
    createSpecialist(createSpecialistInput: $createSpecialistInput) {
      id
      account
      name
      price
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: [Upload!]!) {
    uploadFile(file: $file)
  }
`;

export const DELETE_SPECIALIST = gql`
  mutation deleteSpecialist($id: String!) {
    deleteSpecialist(id: $id)
  }
`;

export const FETCH_STORIES_BY_TIME = gql`
  query fetchStoriesByTime($page: Int!, $categoryName: String) {
    fetchStoriesByTime(page: $page, categoryName: $categoryName) {
      id
      title
      user {
        nickname
      }
      createAt
    }
  }
`;

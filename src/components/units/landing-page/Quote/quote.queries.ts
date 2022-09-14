import { gql } from "@apollo/client";

export const FETCH_SELECTED_QUOTE = gql`
  query fetchSelectedQuote {
    fetchSelectedQuote {
      id
      author
      message
      isSelected
    }
  }
`;

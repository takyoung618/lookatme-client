import { gql } from "@apollo/client";

export const FETCH_CHAT_LOGS = gql`
  query fetchChatLogs($ticketId: String!) {
    fetchChatLogs(ticketId: $ticketId) {
      author
      nickname
      message
      createdAt
    }
  }
`;

export const IS_SPECIALIST = gql`
  query isSpecialist {
    isSpecialist
  }
`;

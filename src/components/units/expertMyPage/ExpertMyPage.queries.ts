import { gql } from "@apollo/client";

export const FETCH_SPECIALIST_OWN_CUSTOMER = gql`
  query fetchSpecialistOwnCustomer {
    fetchSpecialistOwnCustomer {
      id
      createdAt
      expired
      used
      chatRoom {
        id
        room
      }
      user {
        nickname
      }
    }
  }
`;

export const FETCH_SPECIALIST_OWN_COMMENTS = gql`
  query fetchSpecialistOwnComments {
    fetchSpecialistOwnComments {
      text
      createdAt
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_LOGIN_SPECIALIST = gql`
  query fetchLoginSpecialist {
    fetchLoginSpecialist {
      id
      imgUrl
      account
      name
      summary
      introduction
      career
      price
    }
  }
`;

export const FETCH_SPECIALIST_OWN_CUSTOMER = gql`
  query fetchSpecialistOwnCustomer($page: Int!) {
    fetchSpecialistOwnCustomer(page: $page) {
      id
      createdAt
      expired
      used
      # chatRoom {
      #   id
      #   room
      # }
      user {
        nickname
      }
    }
  }
`;

export const FETCH_SPECIALIST_OWN_COMMENTS = gql`
  query fetchSpecialistOwnComments($page: Int!) {
    fetchSpecialistOwnComments(page: $page) {
      text
      createdAt
    }
  }
`;

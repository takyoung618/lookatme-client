import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Int!) {
    createPayment(impUid: $impUid, amount: $amount) {
      amount
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      email
      nickname
      point
    }
  }
`;

export const FETCH_OWN_TICKETS = gql`
  query fetchOwnTickets {
    fetchOwnTickets {
      id
      createdAt
      expired
      used
      chatRoom {
        id
        room
      }
      specialist {
        id
        name
        summary
        imgUrl
        price
      }
    }
  }
`;

export const CREATE_SPECIALIST_REVIEW = gql`
  mutation createSpecialistReview(
    $text: String!
    $rate: Float!
    $specialistId: String!
  ) {
    createSpecialistReview(
      text: $text
      rate: $rate
      specialistId: $specialistId
    ) {
      text
      rate
    }
  }
`;

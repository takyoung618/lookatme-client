import { gql } from "@apollo/client";

export const FETCH_SPECIALIST = gql`
  query fetchSpecialist($id: String!) {
    fetchSpecialist(id: $id) {
      id
      name
      summary
      imgUrl
      introduction
      career
      price
      averageRate
    }
  }
`;

export const FETCH_SPECIALIST_REVIEWS_WITH_SPECIALIST_ID = gql`
  query fetchSpecialistReviewsWithSpecialistId(
    $specialistId: String!
    $page: Int!
  ) {
    fetchSpecialistReviewsWithSpecialistId(
      specialistId: $specialistId
      page: $page
    ) {
      id
      text
      rate
      user {
        nickname
      }
    }
  }
`;

export const CREATE_TICKET = gql`
  mutation createTicket($specialistId: String!) {
    createTicket(specialistId: $specialistId) {
      used
      specialist {
        price
      }
    }
  }
`;

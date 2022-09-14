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
      #   specialistReviews {
      #     text
      #     rate
      #     user {
      #       nickname
      #     }
      #   }
    }
  }
`;

export const CREATE_TICKET = gql`
  mutation createTicket($specialistId: String!) {
    createTicket(specialistId: $specialistId) {
      used
    }
  }
`;

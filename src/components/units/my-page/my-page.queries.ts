import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Int!) {
    createPayment(impUid: $impUid, amount: $amount) {
      amount
    }
  }
`;

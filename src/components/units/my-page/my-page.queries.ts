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

import { gql } from "@apollo/client";

export const SPECIALIST_LOGIN = gql`
  mutation specialistLogin($account: String!, $password: String!) {
    specialistLogin(account: $account, password: $password)
  }
`;

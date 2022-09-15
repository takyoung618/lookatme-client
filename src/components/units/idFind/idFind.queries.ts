import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      nickname
      phone_number
    }
  }
`;

export const SEND_TOKEN_TO_SMS = gql`
  mutation sendTokenToSMS($phoneNumber: String!) {
    sendTokenToSMS(phoneNumber: $phoneNumber)
  }
`;

export const CHECK_TOKEN = gql`
  mutation checkToken($token: String!, $phoneNumber: String!) {
    checkToken(token: $token, phoneNumber: $phoneNumber)
  }
`;

export const FETCH_USER_WITH_PHONE_NUMBER = gql`
  query fetchUserWithPhoneNumber($phoneNumber: String!) {
    fetchUserWithPhoneNumber(phoneNumber: $phoneNumber) {
      email
    }
  }
`;

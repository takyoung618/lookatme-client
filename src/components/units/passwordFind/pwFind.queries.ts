import { gql } from "@apollo/client";

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

export const UPDATE_USER_PWD_WITH_EMAIL = gql`
  mutation updateUserPwdWithEmail($email: String!, $newPassword: String!) {
    updateUserPwdWithEmail(email: $email, newPassword: $newPassword) {
      email
      nickname
    }
  }
`;

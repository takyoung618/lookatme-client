import { gql } from "@apollo/client";

export const UPDATE_USER_PWD = gql`
  mutation updateUserPwd($newPassword: String!) {
    updateUserPwd(newPassword: $newPassword) {
      nickname
    }
  }
`;

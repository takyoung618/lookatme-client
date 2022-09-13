import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      email
      nickname
      phone_number
      point
    }
  }
`;

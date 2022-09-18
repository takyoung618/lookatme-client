import { gql } from "@apollo/client";

export const UPDATE_SPECIALIST_OWN_PROFILE = gql`
  mutation updateSpecialistOwnProfile(
    $updateSpecialistInput: UpdateSpecialistInput!
  ) {
    updateSpecialistOwnProfile(updateSpecialistInput: $updateSpecialistInput) {
      id
      imgUrl
      account
      name
      summary
      introduction
      career
      price
    }
  }
`;

export const FETCH_LOGIN_SPECIALIST = gql`
  query fetchLoginSpecialist {
    fetchLoginSpecialist {
      id
      imgUrl
      account
      name
      summary
      introduction
      career
      price
    }
  }
`;

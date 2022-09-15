import { gql } from "@apollo/client";

export const FETCH_SPECIALISTS = gql`
  query fetchSpecialists($page: Int) {
    fetchSpecialists(page: $page) {
      id
      name
      summary
      imgUrl
      price
      averageRate
    }
  }
`;

export const FETCH_SPECIALIST_BY_PRICE = gql`
  query fetchSpecialistByPrice($page: Int) {
    fetchSpecialistByPrice(page: $page) {
      id
      name
      summary
      imgUrl
      price
      averageRate
    }
  }
`;

export const FETCH_SPECIALSIT_BY_RATE = gql`
  query fetchSpecialsitByRate($page: Int) {
    fetchSpecialsitByRate(page: $page) {
      id
      name
      summary
      imgUrl
      price
      averageRate
    }
  }
`;

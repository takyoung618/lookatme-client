import { gql, useQuery } from "@apollo/client";

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      email
      nickname
      point
      # likedStories {
      #   likes
      #   text
      # }
      # stories {
      #   text
      # }
      # tickets {
      #   specialist {
      #     name
      #     imgUrl
      #     price
      #   }
      #   createdAt
      #   expired
      # }
      # comments {
      #   text
      # }
    }
  }
`;

export function getUserInfo() {
  const { data } = useQuery(FETCH_LOGIN_USER);

  return data;
}

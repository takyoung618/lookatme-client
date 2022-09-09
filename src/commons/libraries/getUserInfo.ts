import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../types/generated/types";

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
  const { data } = useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);

  return data;
}

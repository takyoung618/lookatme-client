import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../types/generated/types";

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      email
      nickname
      point
      phone_number
    }
  }
`;

export function getUserInfo() {
  const { data } = useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);

  return data;
}

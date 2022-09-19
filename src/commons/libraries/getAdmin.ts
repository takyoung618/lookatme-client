import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../types/generated/types";

const IS_ADMIN = gql`
  query isAdmin {
    isAdmin
  }
`;

export function getAdmin() {
  const { data } = useQuery<Pick<IQuery, "isAdmin">>(IS_ADMIN);
  return data;
}

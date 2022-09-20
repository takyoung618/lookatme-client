import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../types/generated/types";

const FETCH_LOGIN_SPECIALIST = gql`
  query fetchLoginSpecialist {
    fetchLoginSpecialist {
      id
      account
      name
    }
  }
`;

export function getSpecialistInfo() {
  const { data } = useQuery<Pick<IQuery, "fetchLoginSpecialist">>(
    FETCH_LOGIN_SPECIALIST
  );

  return data;
}

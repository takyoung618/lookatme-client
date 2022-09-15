import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../types/generated/types";

const IS_SPECIALIST = gql`
  query isSpecialist {
    isSpecialist
  }
`;

export function getSpecialist() {
  const { data } = useQuery<Pick<IQuery, "isSpecialist">>(IS_SPECIALIST);
  return data;
}

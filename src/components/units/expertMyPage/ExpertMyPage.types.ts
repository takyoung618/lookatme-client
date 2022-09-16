import { IQuery } from "../../../commons/types/generated/types";

export interface IExpertMyPageUIProps {
  customerData: Pick<IQuery, "fetchSpecialistOwnCustomer"> | undefined;
  FetchMoreCustomerData: () => void;
  commentsData: Pick<IQuery, "fetchSpecialistOwnComments"> | undefined;
  FetchMoreCommentsData: () => void;
}

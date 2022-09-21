import { IQuery } from "../../../commons/types/generated/types";

export interface IExpertMyPageUIProps {
  SpecialistData: Pick<IQuery, "fetchLoginSpecialist"> | undefined;
  onClickEditProfile: () => void;
  customerData: Pick<IQuery, "fetchSpecialistOwnCustomer"> | undefined;
  FetchMoreCustomerData: () => void;
  commentsData: Pick<IQuery, "fetchSpecialistOwnComments"> | undefined;
  FetchMoreCommentsData: () => void;
  onClickTicket: (event: MouseEvent<HTMLElement>) => void;
}

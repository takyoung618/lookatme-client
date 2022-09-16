import { useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import ExpertMyPageUI from "./ExpertMyPage.presenter";
import {
  FETCH_SPECIALIST_OWN_COMMENTS,
  FETCH_SPECIALIST_OWN_CUSTOMER,
} from "./ExpertMyPage.queries";

export default function ExpertMyPagePage() {
  const { data: customerData, fetchMore: customerFetchMore } = useQuery<
    Pick<IQuery, "fetchSpecialistOwnCustomer">
  >(FETCH_SPECIALIST_OWN_CUSTOMER);

  const FetchMoreCustomerData = () => {
    if (!customerData) return;

    customerFetchMore({
      variables: {
        page:
          Math.ceil(customerData.fetchSpecialistOwnCustomer.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchSpecialistOwnCustomer) {
          return {
            fetchSpecialistOwnCustomer: [...prev.fetchSpecialistOwnCustomer],
          };
        }

        return {
          fetchSpecialistOwnCustomer: [
            ...prev.fetchSpecialistOwnCustomer,
            ...fetchMoreResult.fetchSpecialistOwnCustomer,
          ],
        };
      },
    });
  };

  const { data: commentsData, fetchMore: commentsFetchMore } = useQuery<
    Pick<IQuery, "fetchSpecialistOwnComments">
  >(FETCH_SPECIALIST_OWN_COMMENTS);

  const FetchMoreCommentsData = () => {
    if (!commentsData) return;

    commentsFetchMore({
      variables: {
        page:
          Math.ceil(commentsData.fetchSpecialistOwnComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchSpecialistOwnComments) {
          return {
            fetchSpecialistOwnComments: [...prev.fetchSpecialistOwnComments],
          };
        }

        return {
          fetchSpecialistOwnComments: [
            ...prev.fetchSpecialistOwnComments,
            ...fetchMoreResult.fetchSpecialistOwnComments,
          ],
        };
      },
    });
  };

  return (
    <ExpertMyPageUI
      customerData={customerData}
      FetchMoreCustomerData={FetchMoreCustomerData}
      commentsData={commentsData}
      FetchMoreCommentsData={FetchMoreCommentsData}
    />
  );
}

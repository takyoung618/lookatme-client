import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { IQuery } from "../../../commons/types/generated/types";
import { TicketState } from "../../commons/store";
import ExpertMyPageUI from "./ExpertMyPage.presenter";
import {
  FETCH_LOGIN_SPECIALIST,
  FETCH_SPECIALIST_OWN_COMMENTS,
  FETCH_SPECIALIST_OWN_CUSTOMER,
} from "./ExpertMyPage.queries";

export default function ExpertMyPagePage() {
  const router = useRouter();

  const { data: SpecialistData } = useQuery<
    Pick<IQuery, "fetchLoginSpecialist">
  >(FETCH_LOGIN_SPECIALIST);

  const onClickEditProfile = () => {
    router.push("/expert-my-page/edit");
  };

  const { data: customerData, fetchMore: customerFetchMore } = useQuery<
    Pick<IQuery, "fetchSpecialistOwnCustomer">
  >(FETCH_SPECIALIST_OWN_CUSTOMER, { variables: { page: 0 } });

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
  >(FETCH_SPECIALIST_OWN_COMMENTS, { variables: { page: 0 } });

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

  // 채팅
  const [, setTicketId] = useRecoilState(TicketState);

  const onClickTicket = (event: MouseEvent<HTMLElement>) => {
    const EventId = event.target.id;
    setTicketId(EventId);
    router.push(`/live-chat/${EventId}`);
  };

  return (
    <ExpertMyPageUI
      SpecialistData={SpecialistData}
      onClickEditProfile={onClickEditProfile}
      customerData={customerData}
      FetchMoreCustomerData={FetchMoreCustomerData}
      commentsData={commentsData}
      FetchMoreCommentsData={FetchMoreCommentsData}
      onClickTicket={onClickTicket}
    />
  );
}

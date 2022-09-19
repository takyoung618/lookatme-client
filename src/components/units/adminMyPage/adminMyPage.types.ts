import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface AdminMyPageUIProps {
  QuoteData: Pick<IQuery, "fetchQuotes"> | undefined;
  FetchMoreQuote: () => void;
  onClickStart: () => void;
  onClickStop: () => void;
  quoteModalIsOpen: boolean;
  setQuoteModalIsOpen: Dispatch<SetStateAction<boolean>>;
  onChangeAuthor: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMessage: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateQuote: () => void;
  onClickDeleteQuote: (event: MouseEvent<HTMLButtonElement>) => void;
  ReportedData: Pick<IQuery, "fetchReportedStories"> | undefined;
  FetchMoreReported: () => void;
  onClickDeleteReportedStory: (event: MouseEvent<HTMLButtonElement>) => void;
  SpecialistData: Pick<IQuery, "fetchSpecialists"> | undefined;
  FetchMoreSpecialist: () => void;
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  onClickCreateSpecialist: () => void;
  onChangeAccount: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSummary: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeIntroduction: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCareer: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickSpecialistSubmitButton: (data: any) => void;
  onClickDeleteSpecialist: (event: MouseEvent<HTMLButtonElement>) => void;
  CommunityData: Pick<IQuery, "fetchStoriesByTime"> | undefined;
  FetchMoreCommunityFetchMore: () => void;
  onClickDeleteCommunity: (event: MouseEvent<HTMLButtonElement>) => void;
}

import styled from "@emotion/styled";
import {
  IPriceButtonProps,
  IReviewButtonProps,
  ITimeButtonProps,
} from "./ExpertList.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100%;
  width: 100vw;
`;

export const FetchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #f5f5f5;
  border-bottom: 1px solid #c5c5c5;
  width: 100%;
  height: 40px;
  padding: 10px 20px;
`;

export const TimeFilterButton = styled.div`
  font-size: 0.9375rem;
  font-weight: ${(props: ITimeButtonProps) => (props.time ? "900" : "600")};
  text-decoration: ${(props: ITimeButtonProps) => props.time && "underline"};
  text-underline-position: ${(props: ITimeButtonProps) =>
    props.time && "under"};
  cursor: pointer;
`;

export const ReviewFilterButton = styled.div`
  font-size: 0.9375rem;
  font-weight: ${(props: IReviewButtonProps) => (props.review ? "900" : "600")};
  text-decoration: ${(props: IReviewButtonProps) =>
    props.review && "underline"};
  text-underline-position: ${(props: IReviewButtonProps) =>
    props.review && "under"};
  cursor: pointer;
`;
export const PriceFilterButton = styled.div`
  font-size: 0.9375rem;
  font-weight: ${(props: IPriceButtonProps) => (props.price ? "900" : "600")};
  text-decoration: ${(props: IPriceButtonProps) => props.price && "underline"};
  text-underline-position: ${(props: IPriceButtonProps) =>
    props.price && "under"};
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100vw;
  width: 100%;
  height: 600px;
  overflow: auto;
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 20px 0px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 25%;
  height: 100px;
  background-color: #bdbdbd;
  margin-left: 3%;
`;

export const ProfileWrapper = styled.div`
  width: 70%;
  display: flex;
  text-align: left;
  flex-direction: column;
  padding-left: 5%;
`;

export const NameWrapper = styled.div`
  display: flex;
  padding: 5px 0px;
`;

export const NameTitle = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  width: 15%;
`;

export const Name = styled.div`
  font-size: 1rem;
  font-weight: 500;
  width: 85%;
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  padding: 5px 0px;
`;

export const IntroductionTitle = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  width: 15%;
`;

export const Introduction = styled.div`
  font-size: 1rem;
  font-weight: 500;
  width: 85%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  padding: 5px 0px;
`;

export const PriceTitle = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  width: 15%;
`;

export const Price = styled.div`
  font-size: 1rem;
  font-weight: 500;
  width: 85%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  padding: 10px;
  height: 40px;
  background-color: #f5f5f5;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
  font-size: 0.9375rem;
  color: #7f7f7f;
  font-weight: 500;
`;

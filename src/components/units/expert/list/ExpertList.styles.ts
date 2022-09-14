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

  width: 100%;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  border-bottom: 1px dotted #c5c5c5;
  padding: 20px 5px;
  cursor: pointer;
`;

export const Image = styled.div`
  width: 25%;
  height: 100px;
  background-color: gray;
  margin-left: 2%;
`;

export const ProfileWrapper = styled.div`
  width: 75%;
  display: flex;
  text-align: left;
  flex-direction: column;
  padding-left: 20px;
`;

export const NameWrapper = styled.div`
  display: flex;
  padding: 5px 0px;
`;

export const NameTitle = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  width: 30%;
`;

export const Name = styled.div`
  font-size: 1rem;
  font-weight: 500;
  width: 70%;
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  padding: 5px 0px;
`;

export const IntroductionTitle = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  width: 30%;
`;

export const Introduction = styled.div`
  font-size: 1rem;
  font-weight: 500;
  width: 70%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  padding: 5px 0px;
`;

export const PriceTitle = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  padding: 0px 10px 0px 0px;
  width: 30%;
`;

export const Price = styled.div`
  font-size: 1rem;
  font-weight: 500;
  width: 70%;
`;

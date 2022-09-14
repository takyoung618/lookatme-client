import styled from "@emotion/styled";
import {
  ICommentButtonProps,
  ICommunityListUIProps,
  IFamilyButtonProps,
  IFreeButtonProps,
  IJobButtonProps,
  ILikeButtonProps,
  ILoveButtonProps,
  IMySelfButtonProps,
  IPersonButtonProps,
  ITimeButtonProps,
  ITotalButtonProps,
} from "./community-list.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  height: 55px;
  overflow-x: auto;
  white-space: nowrap;
  width: 97%;
  max-width: 100vw;
  column-gap: 7px;
  padding: 7px 0px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TotalButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 1.0625rem;
  font-weight: 600;
  background-color: ${(props: ITotalButtonProps) =>
    props.total ? "#73bea8" : "#f5f7fa"};
  color: ${(props: ITotalButtonProps) =>
    props.total ? "#fff" : "rgba(42, 47, 61, 0.64)"};
  border-radius: 18px;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #73bea8;
    color: #fff;
  }
`;

export const JobButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 1.0625rem;
  font-weight: 600;
  background-color: ${(props: IJobButtonProps) =>
    props.job ? "#73bea8" : "#f5f7fa"};
  color: ${(props: IJobButtonProps) =>
    props.job ? "#fff" : "rgba(42, 47, 61, 0.64)"};
  border-radius: 18px;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #73bea8;
    color: #fff;
  }
`;

export const LoveButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 1.0625rem;
  font-weight: 600;
  background-color: ${(props: ILoveButtonProps) =>
    props.love ? "#73bea8" : "#f5f7fa"};
  color: ${(props: ILoveButtonProps) =>
    props.love ? "#fff" : "rgba(42, 47, 61, 0.64)"};
  border-radius: 18px;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #73bea8;
    color: #fff;
  }
`;

export const PersonButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 1.0625rem;
  font-weight: 600;
  background-color: ${(props: IPersonButtonProps) =>
    props.person ? "#73bea8" : "#f5f7fa"};
  color: ${(props: IPersonButtonProps) =>
    props.person ? "#fff" : "rgba(42, 47, 61, 0.64)"};
  border-radius: 18px;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #73bea8;
    color: #fff;
  }
`;

export const MySelfButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 1.0625rem;
  font-weight: 600;
  background-color: ${(props: IMySelfButtonProps) =>
    props.mySelf ? "#73bea8" : "#f5f7fa"};
  color: ${(props: IMySelfButtonProps) =>
    props.mySelf ? "#fff" : "rgba(42, 47, 61, 0.64)"};
  border-radius: 18px;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #73bea8;
    color: #fff;
  }
`;

export const FamilyButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 1.0625rem;
  font-weight: 600;
  background-color: ${(props: IFamilyButtonProps) =>
    props.family ? "#73bea8" : "#f5f7fa"};
  color: ${(props: IFamilyButtonProps) =>
    props.family ? "#fff" : "rgba(42, 47, 61, 0.64)"};
  border-radius: 18px;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #73bea8;
    color: #fff;
  }
`;

export const FreeButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 1.0625rem;
  font-weight: 600;
  background-color: ${(props: IFreeButtonProps) =>
    props.free ? "#73bea8" : "#f5f7fa"};
  color: ${(props: IFreeButtonProps) =>
    props.free ? "#fff" : "rgba(42, 47, 61, 0.64)"};
  border-radius: 18px;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #73bea8;
    color: #fff;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #f5f5f5;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
  width: 100%;
  height: 40px;
  padding: 10px 5%;
`;

export const TimeFilterButton = styled.div`
  font-size: 0.9375rem;
  font-weight: ${(props: ITimeButtonProps) => (props.time ? "900" : "600")};
  text-decoration: ${(props: ITimeButtonProps) => props.time && "underline"};
  text-underline-position: ${(props: ITimeButtonProps) =>
    props.time && "under"};
  cursor: pointer;
`;

export const LikeFilterButton = styled.div`
  font-size: 0.9375rem;
  font-weight: ${(props: ILikeButtonProps) => (props.like ? "900" : "600")};
  text-decoration: ${(props: ILikeButtonProps) => props.like && "underline"};
  text-underline-position: ${(props: ILikeButtonProps) =>
    props.like && "under"};
  cursor: pointer;
`;

export const CommentFilterButton = styled.div`
  font-size: 0.9375rem;
  font-weight: ${(props: ICommentButtonProps) =>
    props.comment ? "900" : "600"};
  text-decoration: ${(props: ICommentButtonProps) =>
    props.comment && "underline"};
  text-underline-position: ${(props: ICommentButtonProps) =>
    props.comment && "under"};
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 600px;
`;

export const WriteButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  padding: 20px 5px;
`;

export const WriteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 40px;
  background-color: #73bea8;
  color: #fff;
  font-size: 1.0625rem;
  font-weight: 700;
  border-radius: 20px;
  box-shadow: 2px 2.2px 0 0 rgba(0, 0, 0, 0.13);
  cursor: pointer;
`;

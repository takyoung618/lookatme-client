import styled from "@emotion/styled";
import Modal from "react-modal";
import { Rate } from "antd";
import { ICommentProps, ICommunityProps, ILikeProps } from "./my-page.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  max-width: 100%;
  padding: 14px 0px;
`;

export const MyPageTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-size: 1.46875rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const ModalStyle = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 360px;
  min-width: 320px;
  width: 100%;
  height: 286px;

  background-color: #73bea8;
  border: 1px solid #c5c5c5;
  box-shadow: 7.1px 7.1px 12px 0 rgba(0, 0, 0, 0.31);
  border-radius: 18px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const ModalCloseButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;
  height: 16px;
  padding: 15px;
`;

export const ModalTitleImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 30px;
  padding: 20px;
  font-size: 1.4375rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const ModalSelect = styled.select`
  width: 80%;
  height: 40px;
  padding: 5px;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  background: url("https://storage.googleapis.com/lookatme-storage/2022/9/21/9a7c9d11-44ff-4620-b740-d1843f52e86b/origin/modal-arrow.jpeg")
    no-repeat 98% 50%;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 46px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #7f7f7f;
  padding: 0px 10px;

  ::-ms-expand {
    display: none;
  }
`;

export const ModalChargeButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 25%;
  height: 40px;
  background-color: #fff;
  color: #73bea8;
  box-shadow: 2px 2.2px 0 0 rgba(0, 0, 0, 0.13);
  border: none;
  border-radius: 20px;
  font-size: 1.0625rem;
  font-weight: 600;
  cursor: pointer;
`;

export const ProfileContentsWrapper = styled.div`
  width: 95%;
  background-color: #f5f5f5;
  border: 1px solid #c5c5c5;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ProfileBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
`;

export const PointBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  padding: 5px 3% 0px 0px;
`;

export const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-size: 1.0625rem;
  font-weight: 700;
  width: 30%;
  padding: 5px 0px;
`;

export const ProfileContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 70%;
  font-size: 1.0625rem;
  padding: 5px 0px;
`;

export const PointContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 30%;
  font-size: 1.0625rem;
  padding: 5px 5px;
`;

export const PointButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 40%;
`;

export const MyPageSubTitle = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
  padding: 12px 3%;
  font-size: 1.0625rem;
  font-weight: 700;
`;

export const InfiniteWrapper = styled.div`
  height: 500px;
  overflow: auto;
  margin-bottom: 80px;
`;

export const ExpertListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100%;
  width: 100vw;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px 3%;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100%;
  width: 100vw;
  height: 500px;
  margin-top: 10px;
  margin-bottom: 80px;
  padding: 10px 3%;
  overflow: auto;
`;

export const ExpertWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExpertBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10px 3%;
`;

export const ExpertPhoto = styled.img`
  width: 25%;
  height: 100px;

  background-color: #bdbdbd;
`;

export const ExpertDetail = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
`;

export const ExpertDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  margin-top: 20px;
  margin-bottom: 60px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 10px;
  height: 40px;
  background-color: #f9f9f9;
  border-top: 1px dashed #c5c5c5;
  border-bottom: 1px dashed #c5c5c5;
`;

export const BottomInfoTitle = styled.div`
  font-weight: 1rem;
  font-weight: 700;
  color: #7f7f7f;
`;

export const BottomInfo = styled.div`
  font-size: 0.9375rem;
  font-weight: 500;
  color: #7f7f7f;
`;

export const ExpertButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 20% 5px 32%;
  width: 100%;
  margin-bottom: 15px;
`;

export const ReviewModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 360px;
  min-width: 320px;
  width: 100%;

  background-color: #c3efdf;
  border: 1px solid #c5c5c5;
  box-shadow: 7.1px 7.1px 12px 0 rgba(0, 0, 0, 0.31);
  border-radius: 18px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const ReviewModalCloseButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 45px;
  padding: 15px;
  border-radius: 17px 17px 0px 0px;
`;

export const ReviewModalTitle = styled.div`
  width: 40%;
  font-size: 1.0625rem;
  font-weight: 700;
`;

export const ModalBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalExpertBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 10px 10px 10px;
`;

export const ModalExpertDetail = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin-left: 10px;
`;

export const ModalExpertProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding: 5px 0px 5px 5px;
  margin-bottom: 10px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const ModalExpertTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  width: 20%;
  margin-right: 10px;
`;

export const ModalExpertContents = styled.div`
  font-size: 0.9375rem;
  width: 80%;
`;

export const ReviewRate = styled(Rate)`
  color: #73bea8;
`;

export const ReviewContents = styled.textarea`
  width: 100%;
  height: 70px;
  margin: 10px 0px;
  border: 2px solid #73bea8;
`;

export const ReviewError = styled.div`
  width: 100%;
  margin: 3px 2%;
  color: red;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
`;

export const ModalReviewButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 40px;
  background-color: #fff;
  color: #73bea8;
  box-shadow: 2px 2.2px 0 0 rgba(0, 0, 0, 0.13);
  border: none;
  border-radius: 20px;
  font-size: 1.0625rem;
  font-weight: 600;
  cursor: pointer;
`;

export const HistoryCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 15px 0px;
`;

export const CommunityButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 20%;
  font-size: 1rem;
  font-weight: ${(props: ICommunityProps) => (props.community ? "900" : "600")};
  text-decoration: ${(props: ICommunityProps) =>
    props.community && "underline"};
  text-underline-position: ${(props: ICommunityProps) =>
    props.community && "under"};
  cursor: pointer;
`;

export const CommentButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 20%;
  font-size: 1rem;
  font-weight: ${(props: ICommentProps) => (props.comment ? "900" : "600")};
  text-decoration: ${(props: ICommentProps) => props.comment && "underline"};
  text-underline-position: ${(props: ICommentProps) =>
    props.comment && "under"};
  cursor: pointer;
`;

export const LikeButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 20%;
  font-size: 1rem;
  font-weight: ${(props: ILikeProps) => (props.like ? "900" : "600")};
  text-decoration: ${(props: ILikeProps) => props.like && "underline"};
  text-underline-position: ${(props: ILikeProps) => props.like && "under"};
  cursor: pointer;
`;

export const HistoryBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #c5c5c5;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const HistoryContents = styled.div`
  font-size: 0.9375rem;
  padding: 10px;
  font-weight: 500;
`;

export const HistoryInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 5px 10px;
  margin-top: 10px;
`;

export const HistoryInfo = styled.div`
  font-size: 0.9375rem;
  color: #7f7f7f;
  margin-left: 10px;
  font-weight: 500;
`;

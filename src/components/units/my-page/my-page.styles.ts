import styled from "@emotion/styled";
import Modal from "react-modal";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 380px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1.5px solid #f8f8f8;
  padding: 10px 0px;
  margin-bottom: 20px;
`;

export const MyPageTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: "MiceGodic";
  font-size: 1.6rem;
  padding: 10px;
`;

export const ModalStyle = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  height: 250px;

  background-color: #e9f6ff;
  border: 2px dashed #d6eeff;
  border-radius: 15px;
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
  justify-content: flex-start;

  width: 350px;
  height: 15px;
  padding: 10px;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 464px;
  height: 30px;
  padding: 20px;
  font-size: 1.3rem;
  font-family: "MiceGodic";
  margin-bottom: 40px;
`;

export const ModalSelect = styled.select`
  width: 200px;
  height: 35px;
  padding: 5px;
  border: 1px solid #999;
  border-radius: 5px;
  background: url("/modal-arrow.jpeg/") no-repeat 100% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 20px;

  ::-ms-expand {
    display: none;
  }
`;

export const ModalChargeButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 35px;
  background-color: ${(props) => (props.isActive ? "#6fe5ff" : "#9cd6ff")};
  border: none;
  border-radius: 15px;
  font-size: 0.85rem;
`;

export const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  font-size: 1rem;
  padding: 5px 10px;
`;

export const ProfileContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  font-size: 0.85rem;
  padding: 10px 13px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #9cd6ff;
  box-shadow: 0px 5px 5px #9cd6ff;
  border-radius: 10px;
  padding: 10px 0px;
  margin-bottom: 20px;
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

  width: 390px;
  padding: 10px;
`;

export const ExpertPhoto = styled.div`
  width: 78px;
  height: 83px;

  background-color: #bdbdbd;
`;

export const ExpertDetail = styled.div`
  display: flex;
  flex-direction: column;

  width: 280px;
`;

export const CategoryContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  font-size: 0.8125rem;
  padding: 10px 13px;
`;

export const ExpertButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 390px;
  padding: 5px 10px;
`;

export const ExpertButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;
  margin-right: 15px;
  font-size: 0.85rem;
  background-color: #9cd6ff;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #6fe5ff;
  }
`;

export const HistoryCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 390px;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

export const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 70px;
  font-size: 0.85rem;
  cursor: pointer;
`;

export const HistoryBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 340px;
  background-color: #f5f7fa;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const HistoryInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 5px 15px;
`;

export const HistoryInfo = styled.div`
  font-size: 0.7rem;
  margin-left: 10px;
`;

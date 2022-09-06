import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 390px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1.5px solid #f8f8f8;
  padding: 10px 0px;
  margin-bottom: 20px;
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

  border: 1px solid #8cccc9;
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

  font-size: 0.75rem;
  padding: 10px 13px;
`;

export const ExpertButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 200px;
  padding: 5px 10px;
`;

export const ExpertButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 25px;
  font-size: 0.85rem;
  background-color: #f5f7fa;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #b8f2ef;
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

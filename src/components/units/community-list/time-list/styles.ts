import styled from "@emotion/styled";

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 600px;
  overflow: auto;
`;

export const MapWrapper = styled.div`
  cursor: pointer;
`;

export const InfiniteScrollDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 1000px;
`;

export const Category = styled.div`
  padding: 20px 10px 10px 10px;
  color: #7f7f7f;
  font-size: 0.9375rem;
  font-weight: 500;
`;

export const Title = styled.div`
  padding: 0px 10px;
  font-size: 1.0625rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Contents = styled.div`
  padding: 5px 10px 20px 10px;
  font-size: 0.9375rem;
  font-weight: 500;
`;

export const BodyBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  height: 40px;
  background-color: #f5f5f5;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
`;

export const ContentsInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 45%;
`;

export const LikeButton = styled.div`
  height: 23px;
  cursor: pointer;
`;

export const LikeInfo = styled.div`
  font-size: 0.9375rem;
  color: #7f7f7f;
  font-weight: 500;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 45%;
`;

export const UserProfile = styled.div`
  height: 23px;
`;

export const UserName = styled.div`
  font-size: 0.9375rem;
  color: #7f7f7f;
  font-weight: 500;
`;

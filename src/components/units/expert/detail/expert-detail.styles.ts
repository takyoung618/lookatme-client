import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100%;
  width: 100vw;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 95%;
  padding: 20px 20px;
  margin-top: 16px;
  margin-bottom: 15px;
  background-color: #f5f5f5;
  border: 1px solid #c5c5c5;
`;

export const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 67%;
  padding-top: 10px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const RightTitle = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  padding: 0px 10px 0px 0px;
  width: 30%;
`;

export const RightContents = styled.div`
  font-size: 1rem;
  font-weight: 500;
  width: 70%;
`;

export const ExpertPhoto = styled.img`
  width: 30%;
  height: 100px;

  background-color: #bdbdbd;
`;

export const ChatButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 40px;
  background-color: #73bea8;
  font-size: 1.0625rem;
  font-weight: 700;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 15px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
`;

export const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 0px 15px;
  font-size: 1.031rem;
  font-weight: 600;
  color: #00428d;
`;

export const RateTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px 15px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #5d5d5d;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px 15px;
  font-size: 0.9375rem;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0px 0px 15px 0px;
  margin-bottom: 15px;
  border-bottom: 1px dashed #c5c5c5;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin-bottom: 20px;
`;

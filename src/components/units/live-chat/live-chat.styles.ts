import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100vw;
  height: 600px;
  padding: 10px 20px;
  background-color: #c1e9de;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const NickName = styled.div`
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 5px 5px 2px 5px;
`;

export const LeftMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 80%;
  padding: 12px;
  background-color: #fff;
  border-radius: 10px 10px 10px 0px;
  font-size: 0.9375rem;
  font-weight: 500;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const RightMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 80%;
  padding: 12px;
  background-color: #73c0a9;
  border-radius: 10px 10px 0px 10px;
  font-size: 0.9375rem;
  font-weight: 500;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  border: 1px solid #c5c5c5;
`;

export const MessageInput = styled.input`
  width: 85%;
  background-color: #f5f5f5;
  border: none;
`;

export const SendButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 15%;
  background-color: #73c0a9;
  cursor: pointer;
`;

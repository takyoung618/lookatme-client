import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 200px;
  background-color: #f8f8f8;
`;

export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 390px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 350px;
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

export const FooterButton = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BottomBody = styled.div`
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

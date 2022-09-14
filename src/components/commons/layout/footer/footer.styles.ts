import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  padding: 30px 0px;
  background-color: #f5f5f5;
`;

export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80vw;
  max-width: 414px;
  min-width: 320px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  max-width: 414px;
  min-width: 320px;
  margin-bottom: 25px;
`;

export const FooterButton = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
`;

export const BottomBody = styled.div`
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 5px 0px;
`;

export const CSBody = styled.div`
  font-size: 0.8125rem;
  font-weight: 600;
  padding-top: 15px;
  padding-bottom: 5px;
`;

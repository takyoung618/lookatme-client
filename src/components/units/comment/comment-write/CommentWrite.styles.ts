import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100vw;
  width: 100%;
  margin-top: 70px;
`;

export const CommentWriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100vw;
  width: 100%;
  margin-bottom: 50px;
`;

export const CommentInput = styled.textarea`
  background-color: #f5f5f5;
  border: 1px solid #c5c5c5;
  width: 98%;
  height: 130px;
  padding: 2%;

  ::placeholder {
    font-size: 0.9rem;
  }
`;

export const CommentWriteBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 98%;
`;

export const CommentLengthInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 40px;
  padding-left: 2%;
  font-size: 0.9rem;
  font-weight: 600;
  color: #c5c5c5;
  border-left: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
`;

export const CommentButton = styled.button`
  width: 20%;
  height: 40px;
  padding: 0px 1%;
  background-color: #73bea8;
  border: 1px solid #73bea8;
  color: #fff;
  font-weight: 600;
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  color: red;
  padding: 2%;
`;

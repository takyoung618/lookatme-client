import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

export const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  font-size: 1rem;
  padding: 5px 10px;
`;

export const EditInput = styled.input`
  width: 80%;
  height: 30px;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  width: 80%;
  margin-left: 20px;
  color: red;
  font-size: 0.7rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ExpertButton = styled.button`
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
  border: none;
  cursor: pointer;

  :hover {
    background-color: #6fe5ff;
  }
`;

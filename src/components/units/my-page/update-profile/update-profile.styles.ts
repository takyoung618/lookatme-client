import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #c5c5c5;
  padding: 10px 30px;
  margin-bottom: 10px;
`;

export const ProfileBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 5px 5px 0px 5px;
`;

export const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-size: 1.0625rem;
  font-weight: 700;
  width: 50%;
  padding: 5px 0px;
`;

export const EditInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 50%;
`;

export const ErrorMessage = styled.div`
  width: 55%;
  margin-left: 47%;
  color: red;
  font-size: 0.7rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 5px 10px;
`;

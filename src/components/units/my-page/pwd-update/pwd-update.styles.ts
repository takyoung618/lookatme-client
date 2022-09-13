import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 170px;
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
  height: 30px;
  border: 2px solid #73c7a9;
`;

export const ErrorMessage = styled.div`
  width: 50%;
  margin-left: 50%;
  color: red;
  font-size: 0.7rem;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  padding: 5px 10px;
`;

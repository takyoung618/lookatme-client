import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 1200px;
  width: 100vw;
  padding: 50px;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 30%;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 1.7rem;
  margin-bottom: 30px;
`;

export const StartBtn = styled.button`
  width: 150px;
  height: 100px;
  border: none;
  font-size: 1.2rem;
  margin-right: 30px;
  cursor: pointer;
`;

export const StopBtn = styled.button`
  width: 150px;
  height: 100px;
  border: none;
  font-size: 1.2rem;
  margin-right: 30px;
  cursor: pointer;
`;

export const CreateBtn = styled.button`
  width: 150px;
  height: 100px;
  border: none;
  font-size: 1.2rem;
  margin-right: 30px;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const Column__Basic = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
`;

export const Column__Title = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  width: 113px;
  height: 30px;
  background-color: #73c7a0;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

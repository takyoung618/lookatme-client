import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  max-width: 414px;

  & button {
    cursor: pointer;
    text-align: center;
    padding: 12px 14px;
  }
`;

export const SliderItem = styled.div`
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;

  & button {
    width: 150px;

    cursor: pointer;
    text-align: center;
    background-color: #9cd6ff;
    border: none;
    :hover {
      background-color: #6fe5ff;
    }
  }
`;

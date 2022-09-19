import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextStory = styled(ReactQuill)`
  height: 400px;
  margin-top: 10px;

  ::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
    text-align: start;
  }

  .ql-container {
    height: calc(100% - 42px);
  }
`;

export const Header = styled.div`
  font-size: 1.438rem;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const categoryWrapper = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const Category = styled.select`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 43px;
  border: 1px solid #73bea8;
  border-radius: 20px;
  font-size: 1.063;
  font-weight: 500;
  color: #fff;
  -webkit-appearance: none;
  background: url("/arrow.png/") no-repeat 95% 50%;
  background-color: #73bea8;
  text-indent: 22px;
  margin-top: 20px;

  ::-ms-expand {
    display: none;
  }
`;

export const BoxWrapper = styled.div`
  max-width: 97%;
  width: 100vw;
  margin-left: 1.5%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.1;
  font-weight: 600;
  margin-top: 30px;
  padding: 0px 1%;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  border: solid 1px #c5c5c5;
  padding: 0px 2%;

  ::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
    text-align: start;
  }
`;

export const TextWrapper = styled.div`
  flex-direction: column;
  height: 590px;
`;

export const Text = styled.div`
  display: flex;
  font-size: 1.063;
  margin-top: 30px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageButtonWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 97%;
  margin-left: 1.5%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;

  width: 100%;
  padding: 30px 20%;
  margin: 20px 0px;
`;

export const ListButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 15px;
  background-color: #73bea8;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  color: red;
  padding: 10px 1%;
`;

export const CategoryErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  color: red;
  padding: 10px 15%;
`;

import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
`;


export const EditorWrapper = styled.div`
    width: 85.5%;
    margin-left: 25px;
    margin-top: 15px;
`

export const TextStory = styled(ReactQuill)`
  width: 85.5%;
  height: 550px;
  margin-left: 30px;
  margin-top: 10px;

  padding-bottom: 40px;
`;

export const Header = styled.div`
    font-size: 1.438rem;
    margin-top: 30px;
`;

export const CategoryWrapper = styled.select`
    width: 85.5%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 43px;
    border: 1px solid #73bea8;
    border-radius: 20px;
    font-size: 1.063;
    color: #fff;
    -webkit-appearance: none;
    background: url("/arrow.png/") no-repeat 95% 50%;
    background-color: #73bea8;
    text-indent: 22px;
    margin-top: 20px;
    margin-left: 30px;

    ::-ms-expand {
    display: none;
  }
`

export const DropDown = styled.div`

`

export const TitleWrapper = styled.div`
    flex-direction:column;
`

export const Title = styled.div`
    font-size: 1.063;
    margin-top: 30px;
    margin-right: 285px;
`

export const TitleInput = styled.input`
    width: 85.5%;
    height: 40px;
    margin-top: 11px;
    background-color: #f5f5f5;
    border: solid 1px #c5c5c5;

    ::placeholder {
        color: #7f7f7f;
        text-indent: 8px;
    }
`

export const TextWrapper = styled.div`
    flex-direction:column;
`

export const Text = styled.div`
    font-size: 1.063;
    margin-top: 30px;
    margin-right: 285px;
`

export const TextInput = styled.textarea`
    ::placeholder {
        color: #7f7f7f;
        text-indent: 8px;
        padding-top: 14px;
    }
`

export const ImageWrapper = styled.div`
    width: 85.5%;
    display: flex;
    text-align: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 50px;
    margin-left: 30px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    text-align: center;
   
    margin-bottom: 35px;
    margin-left: 95px;
    margin-top: 30px;
`

export const ListButton = styled.button`
    width: 90px;
    height: 40px;
    font-size: 17px;
    border-radius: 20px;
    margin-top: 15px;
    margin-right: 30px;

    font-size: 1.063;
    background-color: #73bea8;
    border: 1px solid #FCE4EC;
    cursor: pointer;
    color: #fff !important;
`

export const CreateButton = styled.button`
    width: 90px;
    height: 40px;
    font-size: 1.063;
    border-radius: 20px;
    margin-top: 15px;

    font-size: 1.063;
    background-color: #73bea8;
    border: 1px solid #FCE4EC;
    cursor: pointer;
    color: #fff !important;
`
export const ErrorMessage = styled.div`
    margin-top: 10px;
    font-size: 15px;
    color: red;
    margin-right: 150px;
`
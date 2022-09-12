import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
`;

export const Header = styled.div`
    font-size: 1.438rem;
    margin-top: 16px;
    font-family: "MiceGodic";
`;

export const CategoryWrapper = styled.div`
    width: 85.5%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 43px;
    background-color: #73bea8;
    border-radius: 20px;

    margin-top: 7px;
    margin-left: 25px;
`

export const CategoryTitle = styled.div`
    font-size: 1.063;
    color: #fff;

    margin: 15px 0px 0px 22px;
`

export const TitleWrapper = styled.div`
    flex-direction:column;
`

export const Title = styled.div`
    font-size: 1.063;
    margin-top: 17px;
    margin-right: 215px;
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
    margin-top: 17px;
    margin-right: 215px;
`

export const TextInput = styled.textarea`
    display: flex;
    width: 85.5%;
    height: 316px;
    margin-top: 11px;
    margin-left: 25px;
    background-color: #f5f5f5;
    border: solid 1px #c5c5c5;
    text-align: start;
 
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

    margin-top: 10px;
    margin-left: 25px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    text-align: center;
   
    margin-bottom: 35px;
    margin-left: 55px;
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


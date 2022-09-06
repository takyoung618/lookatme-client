import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 20px;
    margin-top: 4px;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    text-align: left;
    flex-direction: row;
    margin-top: 20px;
    
`;


export const Category = styled.button`
    width: 370px;
    height: 52px;
    text-align: left;
    flex-direction: row;
    border-radius: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    border: 2px solid #E5E7E9;
    box-shadow: 0px 5px 10px #E5E7E9;
    background-color: white;
`;

export const CategoryTitle =styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-top: 10px;
`

export const ImageWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    line-height: center;
`;

export const Image = styled.div`
    width: 370px;
    height: 141px;
    background-color: #FCE4EC;
    border: 2px dotted white;
    margin-top: 20px;
    align-items: center;

    border-radius: 10px;
`;

export const ContentsWrapper = styled.div``;

export const Contents = styled.input`
    width: 370px;
    height: 236px;
    margin-top: 20px;
    border-radius: 10px;
    border: 2px solid #E5E7E9;
    box-shadow: 0px 5px 10px #E5E7E9;
`;

export const ButtonWrapper = styled.div`
    text-align: right;
`;

export const SubmitButton = styled.button`
    width: 128px;
    height: 52px;
    font-size: 25px;
    font-weight: 700;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;

    background-color: #FCE4EC;
    border: 1px solid #FCE4EC;
    cursor: pointer;
`;

export const IconCamera = styled

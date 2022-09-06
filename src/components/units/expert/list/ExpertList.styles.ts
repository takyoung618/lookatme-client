import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
`;

export const ButtonWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    width: 120px;
    height: 30px;
    background-color: #FCE4EC;
    border: 1px solid #FCE4EC;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.2rem;
`

export const ListWrapper = styled.div`
    display: flex;
    width: 390px;
    flex-direction: row;
    border-bottom: 2px dotted #E5E7E9;

    margin-top: 20px;
`

export const Image = styled.div`
    width: 120px;
    height: 120px;
    background-color: #BDBDBD;
    margin-bottom: 20px;
`

export const InfoWrapper = styled.div`
    text-align: left;
    margin-left: 30px;
`

export const Name = styled.div`
    font-size: 1.563rem;
    font-weight: 400;
`

export const Introduce = styled.div`
    font-size: 1.563rem;
    font-weight: 400;
    margin-top: 20px;
`

export const Price = styled.div`
    font-size: 1.563rem;
    font-weight: 400;
    margin-top: 20px;
`
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
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.2rem;


    background-color: #9cd6ff;
    border: 1px solid #FCE4EC;
    cursor: pointer;

    :hover {
    background-color: #6fe5ff;
  }
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
    font-size: 0.8125rem;
    font-weight: 400;
`

export const Introduce = styled.div`
    font-size: 0.8125rem;
    font-weight: 400;
    margin-top: 40px;
`

export const Price = styled.div`
    font-size: 0.8125rem;
    font-weight: 400;
    margin-top: 40px;
`
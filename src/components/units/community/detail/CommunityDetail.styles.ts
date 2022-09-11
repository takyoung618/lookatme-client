import styled from "@emotion/styled";


export const Wrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 1.6rem;
    margin-top: 20px;
    font-family: "MiceGodic";
`;
export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 370px;
    height: 447px;
    border: 1px solid  #9cd6ff;
    box-shadow: 0px 5px 5px  #9cd6ff;

    margin-top: 20px;
    border-radius: 10px;
`

export const HeaderWrapper = styled.div`
    display: flex;
    height: 70px;
    border-bottom: 3px dotted #9cd6ff;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Category = styled.div`
    margin-left: 15px;
    margin-top: 12px;
    font-size: 1rem;
    font-weight: 400;
`

export const InfoWrapper = styled.div`
    display: flex;
    text-align: right;
    flex-direction: column;
    vertical-align: middle;
    margin-right: 15px;
    margin-bottom: 10px;
`

export const NicknameWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const NickName = styled.div`
    font-size: 1rem;
    font-weight: 500;
`

export const TimeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`

export const Time = styled.div`
    font-size: 1rem;
    font-weight: 500;
`

export const ContentsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 0.8125rem;
`

export const FooterWrapper = styled.div`
    margin-top: 320px;
    display: flex;
    justify-content: space-between;
    vertical-align: bottom;
    
`
export const SympathyWrapper = styled.div`
    display: flex;
    margin-left: 9px;
`
export const Sympathy = styled.div`
    margin-left: 5px;
`

export const ButtonWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    
    background-color: #9cd6ff;
    border: 1px solid #FCE4EC;
    border-radius: 20px;
    cursor: pointer;

    :hover {
    background-color: #6fe5ff;
  }
`

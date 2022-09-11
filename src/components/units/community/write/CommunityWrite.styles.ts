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

export const TitleWrapper = styled.div`
    display: flex;
    text-align: center;
`

export const TitleInput = styled.input`
    width: 200px;
    height: 50px;
`

export const Category = styled.button`
    width: 380px;
    height: 52px;
    text-align: left;
    flex-direction: row;
    border-radius: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #9CD6FF;
    box-shadow: 0px 5px 5px #9CD6FF;
    background-color: white;
`;

export const CategoryTitle =styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 10px;
`

export const CategoryNameInput = styled.input`
    width: 200px;
    height: 50px;
`

export const ImageWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    line-height: center;
`;

// export const Image = styled.div`
//     width: 250px;
//     height: 250px;
//     background-color: #E5E7E9;
//     border: 2px dotted white;
//     margin-top: 20px;
//     margin-left: 65px;
//     align-items: center;

//     border-radius: 10px;
// `;

export const ContentsWrapper = styled.div``;

export const Contents = styled.input`
    width: 380px;
    height: 380px;
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid #9CD6FF;
    box-shadow: 0px 5px 5px #9CD6FF;
`;

export const ButtonWrapper = styled.div`
    text-align: center
`;

export const ListButton = styled.button`
    width: 128px;
    height: 52px;
    font-size: 1.25rem;
    font-weight: 700;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;

    background-color: #9cd6ff;
    border: 1px solid #FCE4EC;
    cursor: pointer;

    :hover {
    background-color: #6fe5ff;
  }
`;

export const SubmitButton = styled.button`
    width: 128px;
    height: 52px;
    font-size: 1.25rem;
    font-weight: 700;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;

    background-color: #9cd6ff;
    border: 1px solid #FCE4EC;
    cursor: pointer;

    :hover {
    background-color: #6fe5ff;
  }
`;




import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 390px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 340px;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-bottom: 1.5px solid #f8f8f8;
`;

export const TopLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 220px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftTitle = styled.div`
  font-size: 1rem;
  padding: 15px 0px;
`;

export const LeftContents = styled.div`
  font-size: 0.8125rem;
  padding: 0px 5px;
`;

export const ChatButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 30px;
  background-color: #9cd6ff;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    background-color: #6fe5ff;
  }
`;

export const ExpertPhoto = styled.div`
  width: 90px;
  height: 110px;

  background-color: #bdbdbd;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #9cd6ff;
  box-shadow: 0px 5px 5px #9cd6ff;
  border-radius: 10px;
  width: 380px;
  margin: 20px 0px 30px 0px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 330px;
  padding: 20px;
`;

export const CategoryButton = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 350px;
  border: 1px solid #9cd6ff;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 0.8125rem;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 390px;
`;

export const ListButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 30px;
  background-color: #9cd6ff;
  border-radius: 20px;
  margin-bottom: 20px;

  :hover {
    background-color: #6fe5ff;
  }
`;

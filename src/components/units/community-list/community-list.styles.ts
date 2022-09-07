import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  max-width: 390px;
  column-gap: 15px;
  padding: 10px 0px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 1rem;
  background-color: #f5f7fa;
  border-radius: 18px;
  padding: 20px;

  cursor: pointer;

  :hover {
    background-color: #6fe5ff;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #e9e9e9;
  width: 390px;
  height: 30px;
  padding: 10px;
`;

export const FilterButton = styled.div`
  width: 25%;
  font-size: 1rem;
  cursor: pointer;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 390px;
  border-bottom: 1px dashed #bdbdbd;
`;

export const Category = styled.div`
  padding: 10px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 0.8125rem;
`;

export const Title = styled.div`
  padding: 5px 10px;
  font-size: 1rem;
`;

export const Contents = styled.div`
  padding: 5px 10px;
  font-size: 0.8125rem;
`;

export const BodyBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px;
`;

export const ContentsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 130px;
`;

export const LikeButton = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const LikeInfo = styled.div`
  width: 100px;
  font-size: 0.75rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 80px;
`;

export const UserProfile = styled.div`
  width: 15px;
  height: 15px;
`;

export const UserName = styled.div`
  font-size: 0.75rem;
`;

export const WriteButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 390px;
  padding: 10px 5px;
`;

export const WriteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 30px;
  background-color: #9cd6ff;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #6fe5ff;
  }
`;

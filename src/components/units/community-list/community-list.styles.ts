import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  height: 55px;
  overflow-x: auto;
  white-space: nowrap;
  width: 97%;
  max-width: 100vw;
  column-gap: 7px;
  padding: 7px 0px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: rgba(42, 47, 61, 0.64);
  font-size: 1.0625rem;
  font-weight: 600;
  background-color: #f5f7fa;
  border-radius: 18px;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #73bea8;
    color: #fff;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #f5f5f5;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
  width: 100%;
  height: 40px;
  padding: 10px;
`;

export const FilterButton = styled.div`
  width: 28%;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Category = styled.div`
  padding: 20px 10px 10px 10px;
  color: #7f7f7f;
  font-size: 0.9375rem;
  font-weight: 500;
`;

export const Title = styled.div`
  padding: 0px 10px;
  font-size: 1.0625rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Contents = styled.div`
  padding: 5px 10px 20px 10px;
  font-size: 0.9375rem;
  font-weight: 500;
`;

export const BodyBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  height: 40px;
  background-color: #f5f5f5;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
`;

export const ContentsInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 45%;
`;

export const LikeButton = styled.div`
  height: 23px;
  cursor: pointer;
`;

export const LikeInfo = styled.div`
  font-size: 0.9375rem;
  color: #7f7f7f;
  font-weight: 500;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 45%;
`;

export const UserProfile = styled.div`
  height: 23px;
`;

export const UserName = styled.div`
  font-size: 0.9375rem;
  color: #7f7f7f;
  font-weight: 500;
`;

export const WriteButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  padding: 20px 5px;
`;

export const WriteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 40px;
  background-color: #73bea8;
  color: #fff;
  font-size: 1.0625rem;
  font-weight: 700;
  border-radius: 20px;
  box-shadow: 2px 2.2px 0 0 rgba(0, 0, 0, 0.13);
  cursor: pointer;
`;

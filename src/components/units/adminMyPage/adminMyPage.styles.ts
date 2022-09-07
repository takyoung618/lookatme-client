import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 340px;
  height: 277px;
  border: 1px solid #9cd6ff;
  box-shadow: 0px 5px 5px #9cd6ff;
  margin: 30px 0 30px;
  padding: 0 20px;
`;

export const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px dashed black;
  height: 60px;

  & button {
    height: 40px;
    text-align: center;
    padding: 12px 14px;
    background-color: #9cd6ff;
    border-radius: 40px;
    margin-top: 32px;
    color: white;
    border: none;
    margin: 30px 0 32px 5px;
    cursor: pointer;
    :hover {
      background-color: #6fe5ff;
    }
  }
`;

export const Title = styled.h1`
  font-family: "MiceGodic";
  font-size: 1rem;
`;

export const Profile = styled.div`
  width: 290px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ProfileImg = styled.img`
  width: 52px;
  height: 52px;
`;

export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -60px;
`;

export const Name = styled.span``;

export const Introduce = styled.p``;

export const DeleteBtn = styled.button`
  height: 40px;
  text-align: center;
  padding: 12px 14px;
  background-color: #9cd6ff;
  border-radius: 40px;
  color: white;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #6fe5ff;
  }
`;

export const Report = styled.div`
  border-bottom: 1px dashed #bdbdbd;
  padding-bottom: 10px;
`;

export const ReportContents = styled.p`
  margin-top: 30px;
`;

export const ReportDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 290px;
  margin-top: 30px;

  & div {
    display: flex;
    align-items: center;
  }
`;

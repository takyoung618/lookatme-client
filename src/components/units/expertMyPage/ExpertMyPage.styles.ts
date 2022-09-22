import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  max-width: 100%;
  width: 100vw;
`;

export const Header = styled.div`
  font-size: 1.46875rem;
  font-weight: 800;
  margin: 20px 0px;
`;

export const SpecialistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 50%;
  height: 200px;
  background-color: gray;
  margin-bottom: 20px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  padding: 10px 0px;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 80%;
  padding: 10px 0px;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-right: 10%;
  width: 15%;
  text-align: end;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: start;

  font-size: 1.1rem;
  font-weight: 500;
  width: 80%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin-bottom: 40px;
`;

export const ListTitle = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  background-color: #f5f5f5;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
  padding: 10px 3%;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const ProgressListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 500px;
  margin-left: 2.5%;
  overflow: auto;
`;

export const ProgressBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #c5c5c5;
  margin-bottom: 20px;
  padding-right: 5%;
`;

export const TextBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5%;
  width: 70%;
`;

export const ChatButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 15px;
  border: none;
  background-color: #73bea8;
  color: #fff;
  border-radius: 13px;
  height: 30px;
  cursor: pointer;
`;

export const ProgressContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
`;

export const ProgressNickNameTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-right: 25px;
`;

export const ProgressTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-right: 10px;
`;

export const ProgressContents = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  padding: 10px 2%;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 15px 5%;
  background-color: #f5f5f5;
  border: 1px solid #c5c5c5;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const Comment = styled.div`
  width: 100%;
  text-align: start;
  font-size: 0.9375rem;
  font-weight: 500;
`;

export const SympathyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 10px;
`;

export const Sympathy = styled.div`
  color: #7f7f7f;
  font-weight: 500;
  font-size: 0.9375rem;
`;

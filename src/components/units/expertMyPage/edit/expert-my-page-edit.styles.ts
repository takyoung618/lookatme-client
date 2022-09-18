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

export const ImageInput = styled.div`
  height: 200px;
  width: 50%;
  background-color: gray;
  margin-bottom: 20px;
`;

export const ImageFileHidden = styled.input`
  display: none;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0px;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  margin-right: 10%;
  width: 15%;
  text-align: end;
  padding-top: 5px;
`;

export const AccountContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: start;

  font-size: 1.1rem;
  font-weight: 500;
  width: 70%;
  padding: 7px 0px;
`;

export const Contents = styled.textarea`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: start;

  font-size: 1.1rem;
  font-weight: 500;
  width: 70%;
  height: 70px;
  border: 1px solid #73c7a9;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin-bottom: 40px;
`;

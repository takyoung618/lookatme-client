import styled from "@emotion/styled";
import Modal from "react-modal";

export const Wrapper = styled.div`
  min-width: 1200px;
  width: 100vw;
  padding: 50px;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 30%;
  margin-bottom: 30px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 1.7rem;
  margin-bottom: 30px;
`;

export const ExpertCreateButton = styled.button`
  width: 113px;
  height: 30px;
  background-color: #73c7a0;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const StartBtn = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  font-size: 1.2rem;
  margin-right: 30px;
  cursor: pointer;
`;

export const StopBtn = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  font-size: 1.2rem;
  margin-right: 30px;
  cursor: pointer;
`;

export const CreateBtn = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  font-size: 1.2rem;
  margin-right: 30px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const Column__Basic = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
`;

export const Column__Title = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
`;

export const Column__Quote__Title = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
`;

export const Column__Quote = styled.div`
  width: 60%;
  text-align: start;
  cursor: pointer;
`;

export const DeleteBtn = styled.div`
  width: 113px;
  height: 30px;
  background-color: #73c7a0;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 100px;
`;

export const QuoteModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
  height: 270px;

  background-color: #73bea8;
  border: 1px solid #c5c5c5;
  box-shadow: 7.1px 7.1px 12px 0 rgba(0, 0, 0, 0.31);
  border-radius: 18px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const ModalStyle = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
  height: 620px;

  background-color: #73bea8;
  border: 1px solid #c5c5c5;
  box-shadow: 7.1px 7.1px 12px 0 rgba(0, 0, 0, 0.31);
  border-radius: 18px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const ModalCloseButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;
  height: 16px;
  padding: 15px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const ModalContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 500px;
  height: 30px;
  margin-bottom: 30px;
`;

export const ModalTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;

  width: 30%;
`;

export const ModalInput = styled.input`
  width: 70%;
  height: 30px;
`;

export const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 40px;
  margin: auto;
  background-color: #fff;
  color: #73bea8;
  box-shadow: 2px 2.2px 0 0 rgba(0, 0, 0, 0.13);
  border: none;
  border-radius: 20px;
  font-size: 1.0625rem;
  font-weight: 600;
  cursor: pointer;
`;

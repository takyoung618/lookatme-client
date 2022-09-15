import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 335px;
  height: 427px;
  display: flex;
  flex-direction: column;
  margin: 54px auto 80px;
`;

export const Main = styled.div``;

export const HeaderBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const IdFindBtn = styled.button`
  width: 136px;
  height: 40px;
  border: none;
  background: #73c7a0;
  color: white;
  border-radius: 40px 0 0 40px;
`;

export const PwFindBtn = styled.button`
  width: 136px;
  height: 40px;
  border: none;
  border-radius: 0 40px 40px 0;
`;

export const InputWrapper = styled.div`
  margin-bottom: 32px;
`;

export const Label = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #222222;
  margin-bottom: 5px;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 345px;
`;
export const FrontNumber = styled.div`
  width: 50px;
  height: 48px;
  background: #f6f6f6;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export const PhoneNumber = styled.input`
  width: 170px;
  height: 48px;
  background: #f6f6f6;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  padding-left: 10px;
`;

export const AuthNumber = styled.input`
  width: 120px;
  height: 48px;
  background: #f6f6f6;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding-left: 10px;
`;

export const AuthBtn = styled.button`
  width: 100px;
  height: 40px;
  background: #73c7a0;
  border-radius: 40px;
  color: white;
  border: none;
  font-size: 1rem;
`;

export const OkBtn = styled.button`
  width: 100px;
  height: 40px;
  background: #73c7a0;
  border-radius: 40px;
  color: white;
  border: none;
  font-size: 1rem;
`;

export const FindBtn = styled.button`
  width: 333px;
  height: 40px;
  background: #73c7a0;
  border-radius: 40px;
  color: white;
  margin-bottom: 32px;
  border: none;
  margin-top: 20px;
`;

export const Footer = styled.div``;

export const Email = styled.input`
  width: 345px;
  height: 48px;
  background: #f6f6f6 url("/mail.png") no-repeat left;
  background-position-x: 10px;
  background-position-y: 13px;
  padding: 10px 35px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border: none;
`;

export const TokenTimer = styled.div`
  width: 100px;
  height: 48px;
  background: #f6f6f6;
  /* box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2); */
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #73c7a9;
`;

export const FetchEmailModal = styled(Modal)``;

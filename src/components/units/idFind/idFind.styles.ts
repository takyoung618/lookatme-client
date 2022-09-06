import styled from "@emotion/styled";

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
  background: #9cd6ff;
  color: white;
  border-radius: 40px 0 0 40px;
  &:hover {
    background: #6fe5ff;
  }
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

export const PhoneNumber = styled.input`
  width: 267px;
  height: 48px;
  background: #f6f6f6;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  margin-right: 32px;
`;

export const AuthNumber = styled.input`
  width: 225px;
  height: 48px;
  background: #f6f6f6;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const AuthBtn = styled.button`
  width: 140px;
  height: 40px;
  background: #9cd6ff;
  border-radius: 40px;
  color: white;
  border: none;
  font-size: 12px;
  &:hover {
    background: #6fe5ff;
  }
`;

export const OkBtn = styled.button`
  width: 89px;
  height: 40px;
  background: #9cd6ff;
  border-radius: 40px;
  color: white;
  border: none;
  font-size: 12px;
  &:hover {
    background: #6fe5ff;
  }
`;

export const FindBtn = styled.button`
  width: 333px;
  height: 40px;
  background: #9cd6ff;
  border-radius: 40px;
  color: white;
  margin-bottom: 32px;
  border: none;
  &:hover {
    background: #6fe5ff;
  }
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

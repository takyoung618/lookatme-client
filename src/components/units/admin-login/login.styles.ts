import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 335px;
  height: 448px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.6rem;
`;

export const Main = styled.div`
  & button {
    width: 333px;
    height: 40px;
    text-align: center;
    padding: 12px 14px;
    background-color: #73c7a0;
    border-radius: 40px;
    margin-top: 32px;
    color: white;
    border: none;
    margin: 0 0 32px 5px;
    cursor: pointer;
  }
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

export const Password = styled.input`
  width: 345px;
  height: 48px;
  background: #f6f6f6 url("/lock.png") no-repeat left;
  background-position-x: 10px;
  background-position-y: 13px;
  padding: 10px 35px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border: none;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const InnerFooter = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #222222;
  margin-bottom: 20px;

  & button {
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const ImgFooter = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const SocialImg = styled.img``;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

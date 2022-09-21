import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 54px;
  margin-bottom: 80px;
`;

export const Main = styled.div``;

export const Title = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.6rem;
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

export const Input = styled.input`
  width: 345px;
  height: 48px;
  background: #f6f6f6;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border: none;
`;

export const Name = styled.input`
  width: 345px;
  height: 48px;
  background: #f6f6f6
    url("https://storage.googleapis.com/lookatme-storage/2022/9/21/03decc1c-aed1-4f55-b3d3-616adad1937d/origin/user.png")
    no-repeat left;
  background-position-x: 10px;
  background-position-y: 13px;
  padding: 10px 35px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border: none;
`;

export const Email = styled.input`
  width: 345px;
  height: 48px;
  background: #f6f6f6
    url("https://storage.googleapis.com/lookatme-storage/2022/9/21/0f9b52fc-b8b5-42ec-97e4-9254f43ab9d3/origin/mail.png")
    no-repeat left;
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
  background: #f6f6f6
    url("https://storage.googleapis.com/lookatme-storage/2022/9/21/0bffb939-8e50-42a2-a17b-480dae272b51/origin/lock.png")
    no-repeat left;
  background-position-x: 10px;
  background-position-y: 13px;
  padding: 10px 35px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border: none;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  width: 345px;
`;

export const FrontNumber = styled.div`
  width: 100px;
  height: 48px;
  background: #f6f6f6;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const PhoneNumber = styled.input`
  width: 345px;
  height: 48px;
  background: #f6f6f6;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  padding-left: 10px;
`;

export const Footer = styled.div`
  & button {
    width: 333px;
    height: 40px;
    text-align: center;
    padding: 12px 14px;
    background-color: #9cd6ff;
    border-radius: 40px;
    margin: 30px auto;
    color: white;
    border: none;
    cursor: pointer;
    :hover {
      background-color: #6fe5ff;
    }
  }
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const AuthButton = styled.button`
  width: 100px;
  border: none;
  background: #73c7a9;
  cursor: pointer;
  color: white;
`;

export const TokenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 345px;
  margin-top: 30px;

  & button {
    width: 100px;
    border: none;
    background: #73c7a9;
    cursor: pointer;
    color: white;
  }
`;

export const Token = styled.input`
  width: 240px;
  height: 48px;
  background: #f6f6f6;
  /* box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.2); */
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
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
  font-size: 1.2rem;
  color: #73c7a9;
`;

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
  font-family: "MiceGodic";
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
  background: #f6f6f6 url("/user.png") no-repeat left;
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

export const PhoneWrapper = styled.div`
  display: flex;
  width: 345px;
`;

export const MobileCarrier = styled.select`
  width: 78px;
  height: 48px;
  background: #f6f6f6;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: none;
  padding-left: 10px;
`;

export const PhoneNumber = styled.input`
  width: 267px;
  height: 48px;
  background: #f6f6f6;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
`;

export const Zipcode = styled.input`
  width: 140px;
  height: 48px;
  margin: 0 8px 8px 0;
  background: #f6f6f6;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border: none;
  padding-left: 10px;
`;

export const SearchButton = styled.button`
  width: 79px;
  height: 40px;
  border-radius: 40px;
  padding: 12px 14px;
  background-color: #000000;
  color: white;
  border: none;
  cursor: pointer;
`;

export const HeightWrapper = styled.div`
  display: flex;
  width: 345px;
  align-items: center;
  margin-bottom: 5px;
  border: none;
`;

export const HeightInput = styled.input`
  width: 345px;
  height: 48px;
  margin-left: 8px;
  background: #f6f6f6;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border: none;
  padding-left: 10px;
  letter-spacing: 0.02cm;
`;

export const GenderWrapper = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 20px;

  & input[type="radio"] {
    display: none;
  }

  & input[type="radio"] + label {
    display: inline-block;
    cursor: pointer;
    height: 24px;
    width: 90px;
    border: 1px solid #333;
    border-radius: 15px;
    line-height: 24px;
    text-align: center;
    font-weight: bold;
    font-size: 13px;
  }

  & input[type="radio"] + label {
    background-color: #fff;
    color: #333;
  }

  & input[type="radio"]:checked + label {
    background-color: #333;
    color: #fff;
  }
`;

export const Footer = styled.div`
  & button {
    width: 333px;
    height: 40px;
    text-align: center;
    padding: 12px 14px;
    background-color: #9cd6ff;
    border-radius: 40px;
    margin-top: 32px;
    color: white;
    border: none;
    margin-bottom: 30px;
    cursor: pointer;
    :hover {
      background-color: #6fe5ff;
    }
  }
`;

export const Address = styled.input`
  width: 345px;
  height: 48px;
  background: #f6f6f6;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border: none;
  margin-bottom: 10px;
`;

export const AddressDetail = styled.input`
  width: 345px;
  height: 48px;
  background: #f6f6f6;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border: none;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

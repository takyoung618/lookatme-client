import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 80px;
  background-color: #fff;
  border: 1px solid #e9e9e9;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 390px;
`;

export const Logo = styled.div`
  width: 150px;
  height: 45px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const MenuButton = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const DrawerLoginButton = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const DrawerSignUpButton = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 70px;
  cursor: pointer;
`;

export const DrawerButton = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LoginWrapper = styled.div`
  margin-top: 400px;
  display: flex;
  justify-content: space-around;

  & button {
    border: none;
    background: none;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

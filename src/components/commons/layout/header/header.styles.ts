import styled from "@emotion/styled";
import { Drawer } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 80px;
  background-color: #73c7a9;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 98vw;
  max-width: 414px;
  min-width: 320px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 40vw;
`;

export const LogoImage = styled.img`
  width: 130px;
  aspect-ratio: 10 / 2.5;
  cursor: pointer;
`;

export const MenuButton = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-right: 5px;
`;

export const DrawerStyle = styled(Drawer)`
  @media screen and (max-width: 767px) {
    flex-direction: column;
    .ant-drawer-content-wrapper {
      width: 100vw !important;
    }
  }

  .ant-drawer-header-title {
    flex: none;
  }

  .ant-drawer-header {
    background-color: #73c7a9;
    justify-content: flex-end;
    padding: 30px 0px;
  }

  .ant-drawer-body {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DrawerButton = styled.div`
  font-weight: 800;
  margin-bottom: 20px;
  cursor: pointer;

  width: 100%;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1.4375rem;
  padding: 0px 10px 15px 10px;
`;

export const LoginWrapper = styled.div`
  margin-top: 19px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 65%;
  font-size: 1.4375rem;
`;

export const LoginButton = styled.div`
  font-size: 1.0625rem;
  font-weight: 600;
  color: #7f7f7f;
  cursor: pointer;
`;

export const LoginLine = styled.div`
  font-size: 1.0625rem;
  font-weight: 600;
  color: #7f7f7f;
`;

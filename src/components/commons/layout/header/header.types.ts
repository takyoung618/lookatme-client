import { RadioChangeEvent } from "antd";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IHeaderPresenterProps {
  UserInfo: Pick<IQuery, "fetchLoginUser"> | undefined;
  onClickLogo: () => void;
  showMenu: () => void;
  onClose: () => void;
  onChangeMenu: (e: RadioChangeEvent) => void;
  placement: any;
  open: boolean;
  onClickLogin: () => void;
  onClickSignUp: () => void;
  onClickLogOut: () => void;
  onClickMyPage: () => void;
  onClickCommunity: () => void;
  onClickExpert: () => void;
  onClickMoveToAdmin: () => void;
  onClickMoveToExpert: () => void;
  adminMyPage: boolean;
  isVisible: boolean;
  handleCancel: () => void;
  handleVisible: () => void;
}

export interface IButtonWrapperProps {
  adminMyPage: boolean;
}

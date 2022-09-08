import { RadioChangeEvent } from "antd";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IHeaderPresenterProps {
  UserInfo: Pick<IQuery, "fetchLoginUser">;
  onClickLogo: () => void;
  showMenu: () => void;
  onClose: () => void;
  onChangeMenu: (e: RadioChangeEvent) => void;
  placement: Placement | undefined;
  open: boolean;
  onClickLogin: () => void;
  onClickSignUp: () => void;
  onClickLogOut: () => void;
  onClickMyPage: () => void;
  onClickCommunity: () => void;
  onClickExpert: () => void;
  onClickMoveToAdmin: () => void;
  onClickMoveToExpert: () => void;
}

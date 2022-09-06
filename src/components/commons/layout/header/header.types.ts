import { RadioChangeEvent } from "antd";

export interface IHeaderPresenterProps {
  onClickLogo: () => void;
  showMenu: () => void;
  onClose: () => void;
  onChangeMenu: (e: RadioChangeEvent) => void;
  placement: Placement | undefined;
  open: boolean;
  onClickLogin: () => void;
  onClickSignUp: () => void;
  onClickCommunity: () => void;
  onClickExpert: () => void;
  onClickMoveToAdmin: () => void;
  onClickMoveToExpert: () => void;
}

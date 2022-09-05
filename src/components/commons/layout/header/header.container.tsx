import { useRouter } from "next/router";
import HeaderPresenter from "./header.presenter";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { useState } from "react";

export default function HeaderContainer() {
  const router = useRouter();

  // 로고 클릭 시 메인으로 이동
  const onClickLogo = () => {
    router.push("/main/");
  };

  // 햄버거 버튼 라이브러리 관련
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const showMenu = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChangeMenu = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  // 햄버거 버튼 내 메뉴 클릭 시 이동
  const onClickLogin = () => {
    setOpen(false);
    router.push("/login/user/");
  };

  const onClickSignUp = () => {
    setOpen(false);
    router.push("/signUp/");
  };

  const onClickCommunity = () => {
    setOpen(false);
    router.push("/community/");
  };

  const onClickExpert = () => {
    setOpen(false);
    router.push("/expert/");
  };

  return (
    <HeaderPresenter
      onClickLogo={onClickLogo}
      showMenu={showMenu}
      onClose={onClose}
      onChangeMenu={onChangeMenu}
      placement={placement}
      open={open}
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
      onClickCommunity={onClickCommunity}
      onClickExpert={onClickExpert}
    ></HeaderPresenter>
  );
}

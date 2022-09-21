import { useRouter } from "next/router";
import HeaderPresenter from "./header.presenter";
import { DrawerProps, Modal, RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "./header.queries";
import { useRecoilState } from "recoil";
import { logInStatusState } from "../../../../commons/store";
import { getSpecialist } from "../../../../commons/libraries/getSpecialist";
import { getAdmin } from "../../../../commons/libraries/getAdmin";

interface IHeaderContainerProps {
  adminMyPage: boolean;
}

export default function HeaderContainer(props: IHeaderContainerProps) {
  const router = useRouter();

  const UserInfo = getUserInfo();

  const [logout] = useMutation(LOGOUT);

  const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

  const [isVisible, setIsVisible] = useState(false);

  const deleteCookie = (name: any) => {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=C.kr;path=/;";
  };

  useEffect(() => {
    if (UserInfo) {
      setLogInStatus(true);
    } else if (!UserInfo) {
      setLogInStatus(false);
    }
  }, [logInStatus]);

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
    router.push("/sign-up/");
  };

  const onClickLogOut = () => {
    try {
      logout();
      deleteCookie("refreshToken");
      setOpen(false);
      setLogInStatus(false);
      setIsVisible(true);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    router.push("/main");
    window.location.reload();
  };

  const isSpecialist = getSpecialist()?.isSpecialist;
  const isAdmin = getAdmin()?.isAdmin;

  const onClickMyPage = () => {
    setOpen(false);
    isSpecialist && router.push("/expert-my-page");
    isAdmin && router.push("/admin-my-page");
    !isSpecialist && !isAdmin && router.push("/my-page/");
  };

  const onClickCommunity = () => {
    setOpen(false);
    router.push("/community/");
  };

  const onClickExpert = () => {
    setOpen(false);
    router.push("/expert/");
  };

  const onClickMoveToAdmin = () => {
    setOpen(false);
    router.push("/login/admin");
  };

  const onClickMoveToExpert = () => {
    setOpen(false);
    router.push("/login/expert");
  };

  const handleVisible = () => {
    setIsVisible(true);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <HeaderPresenter
      UserInfo={UserInfo}
      onClickLogo={onClickLogo}
      showMenu={showMenu}
      onClose={onClose}
      onChangeMenu={onChangeMenu}
      placement={placement}
      open={open}
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
      onClickLogOut={onClickLogOut}
      onClickMyPage={onClickMyPage}
      onClickCommunity={onClickCommunity}
      onClickExpert={onClickExpert}
      onClickMoveToAdmin={onClickMoveToAdmin}
      onClickMoveToExpert={onClickMoveToExpert}
      adminMyPage={props.adminMyPage}
      isVisible={isVisible}
      handleCancel={handleCancel}
      handleVisible={handleVisible}
    ></HeaderPresenter>
  );
}

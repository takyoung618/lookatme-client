import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  isLoadedState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);

  useEffect(() => {
    if (isLoaded && !accessToken) {
      alert("로그인 후 이용 가능합니다!!");
      router.push("/login/user");
    }
  }, [isLoaded]);

  return <Component {...props} />;
};

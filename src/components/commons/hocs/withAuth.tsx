import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    aaa.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        Modal.info({ title: "로그인 후 이용 가능합니다!!" });
        router.push("/login/user");
      }
    });
  }, []);

  return <Component {...props} />;
};

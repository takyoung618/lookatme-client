import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoadedState } from "../../../commons/store";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoaded] = useRecoilState(isLoadedState);

  useEffect(() => {
    if (isLoaded && !accessToken) {
      alert("로그인 후 이용 가능합니다!!");
      router.push("/login/user");
    }
  }, [isLoaded]);

  return <Component {...props} />;
};

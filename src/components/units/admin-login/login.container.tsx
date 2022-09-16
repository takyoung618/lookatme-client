import LoginUI from "./login.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { ADMIN_LOGIN } from "./login.queries";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import "antd/dist/antd.css";

const schema = yup.object({
  email: yup
    .string()
    .required("아이디를 입력해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      "이메일을 @포함하여 정확히 입력해주세요"
    ),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      "비밀번호는 8~16자리 영문+숫자 입니다."
    ),
});

export default function Login() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [adminLogin] = useMutation<
    Pick<IMutation, "adminLogin">,
    IMutationLoginArgs
  >(ADMIN_LOGIN);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickLogin = async (data: any) => {
    if (!data.email && !data.password) return;
    try {
      const result = await adminLogin({
        variables: { email: data.email, password: data.password },
      });
      const accessToken = result.data?.adminLogin;
      console.log(accessToken);
      if (!accessToken) {
        Modal.info({ title: "로그인 실패" });
        return;
      }

      setAccessToken(accessToken);

      Modal.info({ title: "로그인 성공" });
      router.push("/community");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickMoveToSignup = () => {
    router.push("/sign-up");
  };

  const onClickMoveToIdFind = () => {
    router.push("/id-find");
  };

  const onClickMoveToPasswordFind = () => {
    router.push("/password-find");
  };

  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
      onClickMoveToIdFind={onClickMoveToIdFind}
      onClickMoveToPasswordFind={onClickMoveToPasswordFind}
    />
  );
}

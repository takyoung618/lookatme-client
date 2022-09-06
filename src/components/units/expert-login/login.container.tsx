import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useApolloClient, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { LOGIN } from "./login.queries";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../commons/types/generated/types";
import { ChangeEvent } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import LoginExpertUI from "./login.presenter";

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

export default function LoginExpert() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("email", event.target.value);

    trigger("email");
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("password", event.target.value);

    trigger("password");
  };

  const onClickLogin = async (data: any) => {
    if (!data.email && !data.password) return;
    try {
      const result = await login({
        variables: { email: data.email, password: data.password },
      });
      const accessToken = result.data?.login;
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
    <LoginExpertUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
      onClickMoveToIdFind={onClickMoveToIdFind}
      onClickMoveToPasswordFind={onClickMoveToPasswordFind}
    />
  );
}

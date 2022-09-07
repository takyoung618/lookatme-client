import SignUpUI from "./signUp.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signUp.queries";
import { ChangeEvent } from "react";
import { Modal } from "antd";

const schema = yup.object({
  email: yup
    .string()
    .required("아이디를 입력해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      "이메일은 @포함하여 .com 형태까지 정확히 입력해주세요."
    ),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      "비밀번호는 8~16자리 영문+숫자 입니다."
    ),
  password2: yup
    .string()
    .required("비밀번호 확인을 입력해주세요")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다"),
  name: yup
    .string()
    .required("이름을 입력해주세요")
    .max(15, "이름은 15자리 이하여야 합니다.")
    .min(2, "이름은 2자리 이상이어야 합니다."),
  phoneNumber: yup
    .string()
    .required("전화번호 입력은 필수입니다.")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "전화번호 양식에 맞게 입력해주세요"
    ),
});

export default function SignUp() {
  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("name", event.target.value);

    trigger("name");
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("email", event.target.value);

    trigger("email");
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("password", event.target.value);

    trigger("password");
  };

  const onChangePassword2 = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("password2", event.target.value);

    trigger("password2");
  };

  const onChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("phoneNumber", event.target.value);

    trigger("phoneNumber");
  };

  const onClickSignUp = async (data) => {
    if (!data.name && !data.email && !data.password && !data.phoneNumber)
      return;
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            nickname: data.name,
            phone_number: data.phoneNumber,
          },
        },
      });
      Modal.info({ title: "회원가입 완료" });
      console.log(result);
      router.push("/login/user");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onChangePhoneNumber={onChangePhoneNumber}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePassword2={onChangePassword2}
    />
  );
}

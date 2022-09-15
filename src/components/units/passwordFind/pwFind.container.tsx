import PwFindUI from "./pwFind.presenter";
import * as yup from "yup";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CHECK_TOKEN,
  SEND_TOKEN_TO_SMS,
  UPDATE_USER_PWD_WITH_EMAIL,
} from "./pwFind.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";

const schema = yup.object({
  email: yup
    .string()
    .required("아이디를 입력해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      "이메일은 @포함하여 .com 형태까지 정확히 입력해주세요."
    ),
  phoneNumber: yup
    .string()
    .required("전화번호 입력은 필수입니다.")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "전화번호 양식에 맞게 입력해주세요"
    ),
  checkToken: yup.string().required("인증번호를 입력해주세요"),
  newPassword: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      "비밀번호는 8~16자리 영문+숫자 입니다."
    ),
});

export default function PwFind() {
  const [sendTokenToSMS] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkToken] = useMutation(CHECK_TOKEN);
  const [valid, setValid] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [updateUserPwdWithEmail] = useMutation(UPDATE_USER_PWD_WITH_EMAIL);

  const { register, handleSubmit, formState, watch } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const phoneNumber = "010" + watch("phoneNumber");
  const token = watch("checkToken");

  const router = useRouter();

  // 인증번호 전송
  const onClickSendToken = async (data: any) => {
    if (phoneNumber === "010" || phoneNumber.includes("-") === true) {
      Modal.error({
        content: "핸드폰 번호를 입력해주세요",
      });
      return;
    }

    try {
      setMinutes(3);
      setSeconds(0);
      setIsStart(true);
      await sendTokenToSMS({
        variables: { phoneNumber },
      });
      Modal.success({ content: "인증번호를 전송하였습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  // 인증번호 확인
  const onClickCheckToken = async (data: any) => {
    if (token === "") {
      Modal.error({
        content: "인증번호를 입력해주세요",
      });
      return;
    }

    try {
      const result = await checkToken({
        variables: { token, phoneNumber },
      });
      if (!result.data?.checkToken) {
        setValid(false);
        Modal.error({ content: "인증번호가 일치하지 않습니다." });
      } else {
        setValid(true);
        Modal.success({ content: "인증 완료" });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 타이머
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isStart === false) return;
    const countdown = setInterval(() => {
      if (Number(seconds) > 0) {
        setSeconds(Number(seconds) - 1);
      }
      if (Number(seconds) === 0) {
        if (Number(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(Number(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds, isStart]);

  // 비밀번호 찾기
  const onClickFindPassword = async (data: any) => {
    const result = await checkToken({
      variables: { token, phoneNumber },
    });
    if (!result.data?.checkToken) {
      setValid(false);
      Modal.error({ content: "인증번호가 일치하지 않습니다." });
      return;
    } else {
      setValid(true);
    }

    if (!valid) return;

    try {
      const passwordResult = await updateUserPwdWithEmail({
        variables: { email: data.email, newPassword: data.newPassword },
      });
      if (passwordResult?.data?.updateUserPwdWithEmail.email === data.email) {
        Modal.success({
          content: "비밀번호 변경이 완료되었습니다.",
          onOk() {
            router.push("/login/user");
            setValid(true);
          },
        });
      } else {
        Modal.error({ content: "이메일이 일치하지 않습니다." });
        setValid(false);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      setValid(false);
    }
  };

  const onClickMoveToFindId = () => {
    router.push("/id-find");
  };

  return (
    <PwFindUI
      minutes={minutes}
      seconds={seconds}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSendToken={onClickSendToken}
      onClickCheckToken={onClickCheckToken}
      onClickFindPassword={onClickFindPassword}
      onClickMoveToFindId={onClickMoveToFindId}
    />
  );
}

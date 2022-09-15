import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import IdFindUI from "./idFind.presenter";
import {
  CHECK_TOKEN,
  FETCH_USER_WITH_PHONE_NUMBER,
  SEND_TOKEN_TO_SMS,
} from "./idFind.queries";
import * as yup from "yup";
import { useRouter } from "next/router";

const schema = yup.object({
  phoneNumber: yup
    .string()
    .required("전화번호 입력은 필수입니다.")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "전화번호 양식에 맞게 입력해주세요"
    ),
  checkToken: yup.string().required("인증번호를 입력해주세요"),
});

export default function IdFind() {
  const [sendTokenToSMS] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkToken] = useMutation(CHECK_TOKEN);
  const [valid, setValid] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const { register, handleSubmit, formState, watch } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const phoneNumber = "010" + watch("phoneNumber");
  const token = watch("checkToken");

  const { data } = useQuery(FETCH_USER_WITH_PHONE_NUMBER, {
    variables: {
      phoneNumber,
    },
  });

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

  // 아이디 찾기 모달
  const [isOpen, setIsOpen] = useState(false);

  const onClickFindId = async () => {
    try {
      const result = await checkToken({
        variables: { token, phoneNumber },
      });
      if (!result.data?.checkToken) {
        setValid(false);
        Modal.error({ content: "인증번호가 일치하지 않습니다." });
        return;
      } else {
        console.log(data);
        setValid(true);
        setIsOpen(true);
      }

      if (data === undefined) {
        Modal.error({ content: "존재하지 않는 번호입니다." });
      } else {
        setIsOpen(true);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onClickMoveToFindPassword = () => {
    router.push("/password-find");
  };

  return (
    <IdFindUI
      minutes={minutes}
      seconds={seconds}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSendToken={onClickSendToken}
      onClickCheckToken={onClickCheckToken}
      isOpen={isOpen}
      onClickFindId={onClickFindId}
      handleOk={handleOk}
      handleCancel={handleCancel}
      data={data}
      onClickMoveToFindPassword={onClickMoveToFindPassword}
    />
  );
}

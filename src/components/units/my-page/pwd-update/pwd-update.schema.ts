import * as yup from "yup";

export const schema = yup.object({
  newPassword: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      "비밀번호는 8~16자리 영문+숫자 입니다."
    ),
  newPassword2: yup
    .string()
    .required("비밀번호를 다시 입력해주세요")
    .oneOf([yup.ref("newPassword"), null], "비밀번호가 일치하지 않습니다"),
});

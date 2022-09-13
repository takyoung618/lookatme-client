import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식으로 입력해주세요.")
    .required("이메일을 입력해주세요."),
  nickname: yup.string().required("닉네임을 입력해주세요."),
});

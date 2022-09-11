import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식으로 입력해주세요.")
    .required("이메일을 입력해주세요."),
  nickname: yup.string().required("닉네임을 입력해주세요."),
  phone_number: yup
    .string()
    .required("전화번호를 입력해주세요.")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "전화번호 양식에 맞게 입력해주세요"
    ),
});

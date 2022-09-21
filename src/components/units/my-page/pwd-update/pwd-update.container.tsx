import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { message, Modal } from "antd";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { pwdEditState } from "../../../../commons/store";
import { IMutation } from "../../../../commons/types/generated/types";
import PwdUpdatePresenter from "./pwd-update.presenter";
import { UPDATE_USER_PWD } from "./pwd-update.queries";
import { schema } from "./pwd-update.schema";

export default function PwdUpdateContainer() {
  const [, setPwdEdit] = useRecoilState(pwdEditState);
  const [updateUserPwd] =
    useMutation<Pick<IMutation, "updateUserPwd">>(UPDATE_USER_PWD);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickPwdEditButton = async (data: any) => {
    try {
      await updateUserPwd({
        variables: {
          newPassword: data.newPassword,
        },
      });
      message.success("비밀번호 수정이 완료되었습니다.");
      setPwdEdit(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickBackButton = () => {
    setPwdEdit(false);
  };

  return (
    <PwdUpdatePresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickPwdEditButton={onClickPwdEditButton}
      onClickBackButton={onClickBackButton}
    ></PwdUpdatePresenter>
  );
}

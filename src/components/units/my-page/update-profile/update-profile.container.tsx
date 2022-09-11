import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { message, Modal } from "antd";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { profileEditState } from "../../../../commons/store";
import { IMutation } from "../../../../commons/types/generated/types";
import UpdateProfilePresenter from "./update-profile.presenter";
import { UPDATE_USER } from "./update-profile.queries";
import { schema } from "./update-profile.schema";

export default function UpdateProfileContainer() {
  const UserInfo = getUserInfo();
  const [profileEdit, setProfileEdit] = useRecoilState(profileEditState);
  const [updateUser] = useMutation<Pick<IMutation, "updateUser">>(UPDATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickProfileEditButton = async (data) => {
    try {
      await updateUser({
        variables: {
          userId: UserInfo?.fetchLoginUser.id,
          updateUserInput: {
            email: data.email,
            nickname: data.nickname,
          },
        },
      });
      message.success("프로필 수정이 완료되었습니다.");
      setProfileEdit(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickBackButton = () => {
    setProfileEdit(false);
  };

  return (
    <UpdateProfilePresenter
      UserInfo={UserInfo}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickProfileEditButton={onClickProfileEditButton}
      onClickBackButton={onClickBackButton}
    ></UpdateProfilePresenter>
  );
}

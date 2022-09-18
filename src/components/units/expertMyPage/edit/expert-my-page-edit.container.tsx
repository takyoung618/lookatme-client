import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import ExpertMyPageEditPresenter from "./expert-my-page-edit.presenter";
import {
  FETCH_LOGIN_SPECIALIST,
  UPDATE_SPECIALIST_OWN_PROFILE,
} from "./expert-my-page-edit.queries";

export default function ExpertMyPageEditContainer() {
  const [specialist, setSpecialist] = useState({
    name: "",
    summary: "",
    introduction: "",
    career: "",
    price: 0,
  });

  const { data: SpecialistData } = useQuery<
    Pick<IQuery, "fetchLoginSpecialist">
  >(FETCH_LOGIN_SPECIALIST);

  useEffect(() => {
    setSpecialist({
      name: SpecialistData?.fetchLoginSpecialist.name,
      summary: SpecialistData?.fetchLoginSpecialist.summary,
      introduction: SpecialistData?.fetchLoginSpecialist.introduction,
      career: SpecialistData?.fetchLoginSpecialist.career,
      price: SpecialistData?.fetchLoginSpecialist.price,
    });
    reset({
      name: SpecialistData?.fetchLoginSpecialist.name,
      summary: SpecialistData?.fetchLoginSpecialist.summary,
      introduction: SpecialistData?.fetchLoginSpecialist.introduction,
      career: SpecialistData?.fetchLoginSpecialist.career,
      price: SpecialistData?.fetchLoginSpecialist.price,
    });
  }, [setSpecialist]);

  const router = useRouter();

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: specialist,
  });

  const [updateSpecialistOwnProfile] = useMutation<
    Pick<IMutation, "updateSpecialistOwnProfile">
  >(UPDATE_SPECIALIST_OWN_PROFILE);

  const onClickUpdateButton = async (data: any) => {
    if (!data.summary && !data.introduction && !data.career && !data.price) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      await updateSpecialistOwnProfile({
        variables: {
          updateSpecialistInput: {
            summary: data.summary,
            introduction: data.introduction,
            career: data.career,
            price: Number(data.price),
          },
        },
      });
      message.success("프로필이 수정되었습니다.");
      router.push("/expert-my-page");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <ExpertMyPageEditPresenter
      register={register}
      handleSubmit={handleSubmit}
      SpecialistData={SpecialistData}
      onClickUpdateButton={onClickUpdateButton}
    ></ExpertMyPageEditPresenter>
  );
}

import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CommunityWriteUi from "./CommunityWrite.presenter";
import { CREATE_STORY, IS_USER, UPDATE_STORY } from "./CommunityWrite.queries";
import { message, Modal } from "antd";
import { withAuth } from "../../../commons/hocs/withAuth";
import {
  IQuery,
  IUpdateStoryInput,
} from "../../../../commons/types/generated/types";
import { ICreateStoryProps } from "./CommunityWrite.types";
import { FETCH_STORY } from "../detail/CommunityDetail.queries";

const schema = yup.object({
  title: yup.string().required("제목을 작성해주세요."),
  text: yup.string().required("내용을 작성해주세요."),
  categoryName: yup.string().required("카테고리를 선택해주세요."),
});

function CommunityWrite(props: ICreateStoryProps) {
  const router = useRouter();

  const { data: userData } = useQuery<Pick<IQuery, "isUser">>(IS_USER);

  if (!userData?.isUser) {
    Modal.error({ content: "일반 유저 계정으로 로그인해주세요." });
    router.push(`/community/`);
  }

  useEffect(() => {
    if (props.data !== undefined) {
      reset({
        title: props.data.fetchStory.title,
        text: props.data.fetchStory.text,
        category: props.data.fetchStory.category.name,
      });
    }

    if (props.data?.fetchStory.storyImage?.length) {
      setFileUrls([...props.data?.fetchStory.storyImage?.map((el) => el.url)]);
    }
  }, [props.data]);

  const { register, handleSubmit, formState, reset, setValue, trigger } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createStory] = useMutation(CREATE_STORY);
  const [updateStory] = useMutation(UPDATE_STORY);

  const onChangeContents = (value: string) => {
    setValue("text", value === "<p><br></p>" ? "" : value);
    trigger("text");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // 등록 버튼
  const onClickCreate = async (data: any) => {
    if (data.categoryName && data.title && data.text) {
      try {
        const result = await createStory({
          variables: {
            createStoryInput: {
              title: data.title,
              text: data.text,
              imgUrl: [...fileUrls],
              categoryName: data.categoryName,
            },
          },
        });
        message.success("게시글 등록이 완료되었습니다.");
        router.push(`/community/${result.data.createStory.id}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  // 수정 버튼
  const onClickUpdate = async (data: any) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchStory.storyImage);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateStoryInput: IUpdateStoryInput = {};
    if (isChangedFiles) updateStoryInput.imgUrl = fileUrls;

    if (!data.categoryName && !data.title && !data.text && !isChangedFiles) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      const result = await updateStory({
        variables: {
          updateStoryId: String(router.query.communityId),
          updateStoryInput: {
            title: data.title,
            text: data.text,
            imgUrl: [...fileUrls],
            categoryName: data.categoryName,
          },
        },
        refetchQueries: [
          {
            query: FETCH_STORY,
            variables: { storyId: router.query.communityId },
          },
        ],
      });
      message.success("게시글 수정이 완료되었습니다.");
      router.push(`/community/${result.data?.updateStory.id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 페이지 이동
  const onClickList = () => {
    router.push("/community");
  };

  const onClickToDetail = () => {
    router.push(`/community/${router.query.communityId}`);
  };

  return (
    <CommunityWriteUi
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreate={onClickCreate}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickUpdate={onClickUpdate}
      onClickList={onClickList}
      onClickToDetail={onClickToDetail}
      isEdit={props.isEdit}
      onChangeContents={onChangeContents}
    />
  );
}

export default withAuth(CommunityWrite);

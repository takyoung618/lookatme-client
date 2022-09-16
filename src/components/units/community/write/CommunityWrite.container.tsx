import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CommunityWriteUi from "./CommunityWrite.presenter";
import { CREATE_STORY, UPDATE_STORY } from "./CommunityWrite.queries";
import { ICreateStoryProps } from "./CommunityWrite.types";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";
import { message} from "antd";


const schema = yup.object({
    // categoryName: yup.string().required("카테고리를 선택해주세요."),
    title: yup.string().required("제목을 작성해주세요."),
    text: yup.string().required("내용을 작성해주세요.")
});

// fetchStory에 이미지를 받아올 수 없음 => api 나오면 고치기
export default function CommunityWrite(props: ICreateStoryProps){
    useEffect(() => {
        if (props.data !== undefined) {
          reset({
            title: props.data.fetchStory.title,
            text: props.data.fetchStory.text,
            // imgUrl: props.data.fetchStory.contents,
            categoryName: {
              name: props.data.fetchStory.category?.name,
            },
          });

        //   if (props.data?.fetchStory.images?.length) {
        //     setFileUrls([...props.data.fetchUseditem.images]);
        //   }
        }
        setIsEdit(true);
    }, [props.data])

    const router = useRouter();
    const { register, handleSubmit, formState, reset, setValue, trigger } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const [selected, setSelected] = useState("");

    const [createStory] = useMutation(CREATE_STORY);
    const [updateStory] = useMutation(UPDATE_STORY);

    const [fileUrls, setFileUrls] = useState(["", "", ""]);

    const [isEdit, setIsEdit] = useRecoilState(isEditState);

    // 카테고리 선택
    const onChangeSelect = (event: any) => {
        setSelected(event.target.value);
    };

    const onChangeContents = (value: string) => {
        setValue("text", value === "<p><br></p>" ? "" : value);
        trigger("text")
    };

    // 이미지 업로드
    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };

    // 등록 버튼
    const onClickCreate = async (data:any) => {
        
        const result = await createStory({
            variables: {
                createStoryInput: {
                    title: data.title,
                    text: data.text,
                    imgUrl: [...fileUrls],
                    categoryName: selected
                }
            }
        })
        console.log(result);
        console.log(data);
        message.success("게시글 등록이 완료되었습니다.");
        
        router.push(`/community/${result.data?.createStory.id}`);
    }

    // 수정 버튼
    const onClickUpdate = async (data:any) => {
        const result = await updateStory({
            variables: {
                updateStoryId: String(router.query.communityId),
                updateStoryInput: {
                    title: data.title,
                    text: data.text,
                    imgUrl: [...fileUrls],
                    categoryName: selected
                }
                
            }
        })
        console.log(result)
        console.log(data);
        alert("게시글 수정이 완료되었습니다.")
        router.push(`/community/${result.data?.createStory.id}`)
    }

    // 페이지 이동
    const onClickList = () => {
        router.push("/community")
    }

    const onClickToDetail = () => {
        router.push(`/community/${router.query.communityId}`);
    };


    return (
        <CommunityWriteUi
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickCreate={onClickCreate}
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls} 
        // isActive={isActive}
        onClickUpdate={onClickUpdate}
        onClickList={onClickList}
        onClickToDetail={onClickToDetail}
        onChangeSelect={onChangeSelect}
        isEdit={props.isEdit}
        onChangeContents={onChangeContents}
        />
    )
}
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import CommunityWriteUi from "./CommunityWrite.presenter";
import { CREATE_STORY, UPDATE_STORY } from "./CommunityWrite.queries";
import { ICreateUsedItemContainerProps } from "./CommunityWrite.types";

const schema = yup.object({
    text: yup.string().required("내용을 입력해주세요."),
    // categoryName: yup.string().required("카테고리를 선택해주세요."),
});

export default function CommunityWrite(props: ICreateUsedItemContainerProps){
    const router = useRouter();
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const [createStory] = useMutation(CREATE_STORY);
    const [updateStory] = useMutation(UPDATE_STORY);


    // 카테고리 선택
    // const [isActive, setIsActive] = useState(false);
   

    // 이미지 업로드
    const [fileUrls, setFileUrls] = useState(["", "", ""]);

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
                    categoryName: data.categoryName
                }
            }
        })
        console.log(result);
        console.log(data);
        alert("고민 등록이 완료되었습니다.")
    }

    // 수정 버튼
    const onClickUpdate = async (data:any) => {
        const result = await updateStory({
            variables: {
                createStoryInput: {
                    title: data.title,
                    text: data.text,
                    imgUrl: [...fileUrls],
                    // categoryName: String(data.categoryName)
                }
            }
        })
        console.log(result)
        console.log(data); 
    }


    
    // 페이지 이동
    const onClickList = () => {
        router.push("/community")
    }

    const onClickToDetail = () => {
        router.push(`/community/${router.query.id}`);
    };


    return (
        <CommunityWriteUi
        // isActive={isActive}

        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls} 

        register={register}
        handleSubmit={handleSubmit}
        formState={formState}

        onClickCreate={onClickCreate}
        onClickUpdate={onClickUpdate}

        onClickList={onClickList}
        onClickToDetail={onClickToDetail}
        data={props.data}
        />
    )
}
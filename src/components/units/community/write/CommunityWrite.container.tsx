// import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { isEditState } from "../../../commons/store";
import CommunityWriteUi from "./CommunityWrite.presenter";
// import { CREATE_STORY, UPDATE_STORY } from "./CommunityWrite.queries";

const schema = yup.object({
    text: yup.string().required("내용을 입력해주세요."),
    // categoryName: yup.string().required("카테고리를 선택해주세요."),
});

export default function CommunityWrite(){
    const router = useRouter();
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    // const [createStory] = useMutation(CREATE_STORY)
    // const [updateStory] = useMutation(UPDATE_STORY)


    // 이미지 업로드
    const [fileUrls, setFileUrls] = useState(["", "", ""]);

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };
    

    // 등록 버튼
    // const onClickCreate = async (data:any) => {
    //     const result = await createStory({
    //         variables: {
    //             createStoryInput: {
    //                 tite: data.title,
    //                 text: data.text,
    //                 imgUrl: [...fileUrls],
    //                 category: {
    //                     name: data.category.name
    //                 }
    //             }
    //         }
    //     })
    //     console.log(result);
    //     console.log(data);
    //     alert("고민 등록이 완료되었습니다.")
    // }

    // 수정 버튼
    // const onClickUpdate = async (data:any) => {
    //     const result = await updateStory({
    //         variables: {
    //             createStoryInput: {
    //                 title: data.title,
    //                 text: data.text,
    //                 imgUrl: [...fileUrls],
    //                 category: {
    //                     name: data.category.name
    //                 }
    //             }
    //         }
    //     })
    //     console.log(result)
    //     console.log(data); 
    // }

    // 페이지 이동
    const onClickList = () => {
        router.push("/community")
    }


    return (
        <CommunityWriteUi
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls}

        register={register}
        handleSubmit={handleSubmit}
        formState={formState}

        // onClickCreate={onClickCreate}
        // onClickUpdate={onClickUpdate}
        onClickList={onClickList}
        // isEdit={props.isEdit}
        />
    )
}
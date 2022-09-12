import { useRouter } from "next/router";
import { useState } from "react";
import CommunityWriteUi from "./CommunityWrite.presenter";

export default function CommunityWrite(){
    const router = useRouter();

    // 이미지 업로드
    const [fileUrls, setFileUrls] = useState(["", "", ""]);

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };
    
    // 페이지 이동
    const onClickList = () => {
        router.push("/community")
    }


    return (
        <CommunityWriteUi
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls} 
        onClickList={onClickList}
       
        />
    )
}
import { useRouter } from "next/router";
import CommunityWriteUi from "./CommunityWrite.presenter";


export default function CommunityWrite(){
    const router = useRouter();

    const onClickList = () => {
        router.push("/community")
    }


    return (
        <CommunityWriteUi
        onClickList={onClickList}
        />
    )
}
import { useRouter } from "next/router";
import CommunityDetailUi from "./CommunityDetail.presenter";

export default function CommunityDetail() {
    const router = useRouter();


    // 페이지 이동
    const onClickMoveToList = () => {
        router.push("/community")
    }

    return (
    <CommunityDetailUi
        onClickMoveToList={onClickMoveToList}
    />
    )
}
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityDetailUi from "./CommunityDetail.presenter";
import { DELETE_OWNSTORY, FETCH_STORY, FETCH_LOGIN_USER } from "./CommunityDetail.queries";

export default function CommunityDetail() {
    const router = useRouter();

    // 아직 API 안나와서 나중에 수정해야 할 부분
    const {data} = useQuery(FETCH_STORY, {
        variables: { storyId: String(router.query.storyId) },
    });

    const [deleteOwnStory] = useMutation(DELETE_OWNSTORY)
    const [fetchLoginUser] = useQuery(FETCH_LOGIN_USER)

    // 게시글 삭제
    const onClickDeleteStory = async () => {
        try {
          await deleteOwnStory({
            variables: { storyId: router.query.communityId },
          });
          message.success(`${data?.fetchStory.name} 삭제가 완료되었습니다.`);
          router.push("/community");
        } catch (error) {
          if (error instanceof Error) console.log(error.message);
        }
    };

    // 페이지 이동
    const onClickMoveToList = () => {
        router.push("/community")
    }

    // 이것도 수정
    const onClickMoveToEdit = () => {
        router.push("/community/[communityId]/edit")
    }


    return (
    <CommunityDetailUi
        data={data}
        onClickDeleteStory={onClickDeleteStory}
        fetchLoginUser={fetchLoginUser}
        onClickMoveToList={onClickMoveToList}
        onClickMoveToEdit={onClickMoveToEdit}
    />
    )
}
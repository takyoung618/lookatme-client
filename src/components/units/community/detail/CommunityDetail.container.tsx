import { useMutation, useQuery } from "@apollo/client";
import { message } from "antd";
import { useRouter } from "next/router";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { IMutation, IMutationDeleteOwnStoryArgs, IMutationLikeStoryArgs, IQuery, IQueryFetchStoryArgs} from "../../../../commons/types/generated/types";
import CommunityDetailUi from "./CommunityDetail.presenter";
import { DELETE_OWN_STORY, FETCH_STORY, LIKE_STORY } from "./CommunityDetail.queries";

export default function CommunityDetail() {
    const router = useRouter();

    const UserInfo = getUserInfo();

    const { data } = useQuery<
    Pick<IQuery, "fetchStory">,
    IQueryFetchStoryArgs
    >(FETCH_STORY, {
        variables:  {storyId: String(router.query.communityId)}
    });

    const [deleteOwnStory] = useMutation<
    Pick<IMutation, "deleteOwnStory">,
    IMutationDeleteOwnStoryArgs
    >(DELETE_OWN_STORY);

    const [likeStory] = useMutation<
      Pick<IMutation, "likeStory">,
      IMutationLikeStoryArgs
    >(LIKE_STORY); 

    // 사연 삭제 - 아직 구현 안됐음
    const onClickDeleteStory = async () => {
        try {
          await deleteOwnStory({
            variables: { storyId: String(router.query.communityId)},
          });
          message.success(`${data?.fetchStory.nickname}님 삭제가 완료되었습니다.`);
          router.push("/community");
        } catch (error) {
          if (error instanceof Error) console.log(error.message);
        }
    };

    // 공감 버튼
    const onClickHeart = async () => {
      try {
        await likeStory({
          variables: { storyId: String(router.query.communityId)},
          refetchQueries: [
            {
              query: FETCH_STORY,
              variables: { storyId: String(router.query.communityId)},
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    };
    

    // 페이지 이동
    const onClickMoveToList = () => {
        router.push("/community")
    }

    const onClickMoveToUpdate = () => {
        router.push(`/community/${router.query.communityId}/edit`)
    }

    return (
    <CommunityDetailUi
        data={data}
        UserInfo={UserInfo}
        onClickMoveToList={onClickMoveToList}
        onClickMoveToUpdate={onClickMoveToUpdate}
        onClickDeleteStory={onClickDeleteStory}
        onClickHeart={onClickHeart}
    />
    )
}
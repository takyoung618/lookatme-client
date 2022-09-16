import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchStoryArgs } from "../../../../src/commons/types/generated/types";
import CommunityWrite from "../../../../src/components/units/community/write/CommunityWrite.container";

const FETCH_STORY = gql`
    query fetchStory($storyId: String!){
        fetchStory(storyId: $storyId){
            id
            likes
            commentCounts
            title
            text
            createAt
            user {
              nickname
            }
            category {
              name
            }
    }   
  }
`



export default function CommunityEditPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchStory">,
    IQueryFetchStoryArgs
    >(FETCH_STORY, {
        variables:  {storyId: String(router.query.communityId)}
    });

  return <CommunityWrite isEdit={true} data={data} />
}

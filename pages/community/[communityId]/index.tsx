import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityDetail from "../../../src/components/units/community/detail/CommunityDetail.container";

const FETCH_STORY = gql`
  query fetchStory

`

export default function CommunityDetailPage() {
  const router = useRouter();

  const {data} = useQuery(FETCH_STORY)
  // const { data } = useQuery<
  //   Pick<IQuery, "fetchStory">,
  //   IQueryFetchStoryArgs
  // >(FETCH_STORY, {
  //   variables: { useditemId: String(router.query.productId) },
  // });


  return <CommunityDetail isEdit={false} data={data}/>
}

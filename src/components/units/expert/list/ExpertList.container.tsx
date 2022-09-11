import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ExpertListUi from "./ExpertList.presenter";
import { FETCH_SPECIALISTS } from "./ExpertList.queries";

export default function ExpertList(){
    const router = useRouter;
   
    const { data, fetchMore } = useQuery(FETCH_SPECIALISTS)

    // const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchSpecialists'>, IQueryFetchSpecialistsArgs>(FETCH_SPECIALISTS);
    // 타입 지정 어케 하는지 모름.


    const onFetchMore = () => {
        if (!data) return;
    
        fetchMore({
          variables: { page: Math.ceil(data?.fetchSpecialists.length / 10) + 1 },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.fetchBoards)
              return { fetchSpecialists: [...prev.fetchSpecialists] };
    
            return {
                fetchSpecialists: [...prev.fetchSpecialists, ...fetchMoreResult.fetchSpecialists],
            };
          },
        });
    };

    const onClickMoveToDetail = (event: MouseEvent<HTMLElement>) => {
        if (!(event.target instanceof HTMLElement)) return;
        router.push(`/expert/${event.currentTarget.id}`);
    };

    return (
        <ExpertListUi
            data = {data}
            onFetchMore = {onFetchMore}
            onClickMoveToDetail = {onClickMoveToDetail}
        />
    )
}
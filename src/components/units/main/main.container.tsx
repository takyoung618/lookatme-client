import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MainUI from "./main.presenter";
import { FETCH_BEST_STORIES, FETCH_SPECIAL_LISTS } from "./main.queries";

export default function Main() {
  const router = useRouter();

  const onClickMoveToExpert = () => {
    router.push("/expert");
  };

  const onClickMoveToCommunity = () => {
    router.push("/community");
  };

  const onClickMoveToMyPage = () => {
    router.push("/my-page");
  };

  const onClickMoveToPostIt = () => {
    router.push("/post-it");
  };

  const onClickMoveToFAQ = () => {
    router.push("/customer-center/faq");
  };

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof Element)) return;
    router.push(`/community/${event.currentTarget.id}`);
  };

  const { data } = useQuery(FETCH_BEST_STORIES);

  const { data: SpecialListData } = useQuery(FETCH_SPECIAL_LISTS);

  return (
    <MainUI
      onClickMoveToExpert={onClickMoveToExpert}
      onClickMoveToCommunity={onClickMoveToCommunity}
      onClickMoveToMyPage={onClickMoveToMyPage}
      onClickMoveToPostIt={onClickMoveToPostIt}
      onClickMoveToFAQ={onClickMoveToFAQ}
      onClickMoveToDetail={onClickMoveToDetail}
      data={data}
      SpecialListData={SpecialListData}
    />
  );
}

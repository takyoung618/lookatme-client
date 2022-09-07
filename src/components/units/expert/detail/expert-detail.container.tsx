import { useRouter } from "next/router";
import ExpertDetailPresenter from "./expert-detail.presenter";

export default function ExpertDetailContainer() {
  const router = useRouter();

  const onClickMoveToList = () => {
    router.push("/expert/");
  };

  return (
    <ExpertDetailPresenter
      onClickMoveToList={onClickMoveToList}
    ></ExpertDetailPresenter>
  );
}

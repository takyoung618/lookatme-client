import { useRouter } from "next/router";
import CommunityListPresenter from "./community-list.presenter";

export default function CommunityListContainer() {
  const router = useRouter();

  const onClickWriteButton = () => {
    router.push("/community/new/");
  };

  return (
    <CommunityListPresenter
      onClickWriteButton={onClickWriteButton}
    ></CommunityListPresenter>
  );
}

import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MyPageContainer from "../../src/components/units/my-page/my-page.container";

function UserMyPage() {
  return <MyPageContainer></MyPageContainer>;
}

export default withAuth(UserMyPage);

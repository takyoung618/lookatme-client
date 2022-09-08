import { withAuth } from "../../src/components/commons/hocs/withAuth";
import AdminMyPageContainer from "../../src/components/units/adminMyPage/adminMyPage.container";

function AdminMyPage() {
  return <AdminMyPageContainer />;
}

export default withAuth(AdminMyPage);

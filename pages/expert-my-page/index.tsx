import { withAuth } from "../../src/components/commons/hocs/withAuth";
import ExpertMyPagePage from "../../src/components/units/expertMyPage/ExpertMyPage.container";

function ExpertMyPage() {
  return <ExpertMyPagePage />;
}

export default withAuth(ExpertMyPage);

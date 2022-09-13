import axios from "axios";
import AdminMyPageUI from "./adminMyPage.presenter";

export default function AdminMyPageContainer() {
  const onClickStart = () => {
    axios.post("https://x0ng120x.shop/batches/start/quote").then((res) => {
      console.log(res);
    });
  };

  const onClickStop = () => {
    axios.post("https://x0ng120x.shop/batches/stop/quote").then((res) => {
      console.log(res);
    });
  };

  return (
    <AdminMyPageUI onClickStart={onClickStart} onClickStop={onClickStop} />
  );
}

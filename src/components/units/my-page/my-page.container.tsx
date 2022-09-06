import { ChangeEvent, useState } from "react";
import MyPagePresenter from "./my-page.presenter";

export default function MyPageContainer() {
  // 충전하기 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [charged, setCharged] = useState(false);

  const onChangeSelectedPoint = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);

    if (!event.target.value) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const onClickChargePoint = () => {
    // 결제 API
  };
  return (
    <MyPagePresenter
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
      selected={selected}
      isActive={isActive}
      onChangeSelectedPoint={onChangeSelectedPoint}
      onClickChargePoint={onClickChargePoint}
    ></MyPagePresenter>
  );
}

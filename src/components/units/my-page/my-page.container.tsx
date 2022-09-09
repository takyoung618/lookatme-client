import { useMutation } from "@apollo/client";
import { message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { profileEditState } from "../../../commons/store";
import { IMutation } from "../../../commons/types/generated/types";
import MyPagePresenter from "./my-page.presenter";
import { CREATE_PAYMENT, FETCH_LOGIN_USER } from "./my-page.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyPageContainer() {
  const router = useRouter();

  const UserInfo = getUserInfo();

  // 충전하기 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [createPayment] =
    useMutation<Pick<IMutation, "createPayment">>(CREATE_PAYMENT);

  const onChangeSelectedPoint = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(parseInt(event.target.value));

    if (!event.target.value) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const onClickChargePoint = () => {
    const IMP = window.IMP;

    IMP.init("imp88117825");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "LookAtMe 포인트 충전",
        amount: selected,
        buyer_email: UserInfo?.fetchLoginUser.email,
        buyer_name: UserInfo?.fetchLoginUser.nickname,
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 구로구",
        buyer_postcode: "01181",
        m_redirect_url: `http://localhost:3000/my-page`,
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPayment({
            variables: { impUid: rsp.imp_uid, amount: selected },
            refetchQueries: [{ query: FETCH_LOGIN_USER }],
          });
          setModalIsOpen(false);
          router.push(`/my-page/`);
          message.success("결제가 완료되었습니다.");
        } else {
          message.error("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  // 프로필 수정 버튼
  const [profileEdit, setProfileEdit] = useRecoilState(profileEditState);

  const onClickEditButton = () => {
    setProfileEdit(true);
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <MyPagePresenter
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        selected={selected}
        isActive={isActive}
        onChangeSelectedPoint={onChangeSelectedPoint}
        onClickChargePoint={onClickChargePoint}
        UserInfo={UserInfo}
        profileEdit={profileEdit}
        onClickEditButton={onClickEditButton}
      ></MyPagePresenter>
    </>
  );
}

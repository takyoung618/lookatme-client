import * as S from "./idFind.styles";
import { IFindIdProps } from "./idFind.types";

export default function IdFindUI(props: IFindIdProps) {
  return (
    <>
      {props.isOpen && (
        <S.FetchEmailModal
          open={true}
          onCancel={props.handleCancel}
          okButtonProps={{ style: { display: "none" } }}
        >
          <span>{props.data?.fetchUserWithPhoneNumber.email}</span>
        </S.FetchEmailModal>
      )}
      <form onSubmit={props.handleSubmit(props.onClickFindId)}>
        <S.Wrapper>
          <S.Main>
            <S.HeaderBtns>
              <S.IdFindBtn type="button">아이디</S.IdFindBtn>
              <S.PwFindBtn
                type="button"
                onClick={props.onClickMoveToFindPassword}
              >
                비밀번호
              </S.PwFindBtn>
            </S.HeaderBtns>
            <S.InputWrapper>
              <S.Label>전화번호</S.Label>
              <S.PhoneWrapper>
                <div style={{ display: "flex" }}>
                  <S.FrontNumber>010</S.FrontNumber>
                  <S.PhoneNumber
                    type="text"
                    {...props.register("phoneNumber")}
                  />
                </div>
                <S.AuthBtn type="button" onClick={props.onClickSendToken}>
                  인증번호
                </S.AuthBtn>
              </S.PhoneWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>인증번호</S.Label>
              <S.PhoneWrapper>
                <div style={{ display: "flex" }}>
                  <S.AuthNumber {...props.register("checkToken")} type="text" />
                  <S.TokenTimer>
                    {`${String(props.minutes).padStart(2, "0")} : ${String(
                      props.seconds
                    ).padStart(2, "0")}`}
                  </S.TokenTimer>
                </div>
                <S.OkBtn type="button" onClick={props.onClickCheckToken}>
                  확인
                </S.OkBtn>
              </S.PhoneWrapper>
            </S.InputWrapper>
            <S.FindBtn>아이디 찾기</S.FindBtn>
          </S.Main>
        </S.Wrapper>
      </form>
    </>
  );
}

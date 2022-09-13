import BasicButton from "../../../commons/button";
import * as S from "./pwd-update.styles";
import { RiLockPasswordFill } from "react-icons/ri";
import { IPwdUpdatePresenterProps } from "./pwd-update.types";

export default function PwdUpdatePresenter(props: IPwdUpdatePresenterProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickPwdEditButton)}>
      <S.Wrapper>
        <S.ProfileBody>
          <S.CategoryTitle>
            <RiLockPasswordFill
              style={{
                width: "25px",
                height: "23px",
                marginRight: "5px",
                color: "#808080",
              }}
            />
            비밀번호
          </S.CategoryTitle>
          <S.EditInput
            {...props.register("newPassword")}
            type="password"
          ></S.EditInput>
        </S.ProfileBody>
        <S.ErrorMessage>
          {props.formState.errors.newPassword?.message}
        </S.ErrorMessage>

        <S.ProfileBody>
          <S.CategoryTitle>
            <RiLockPasswordFill
              style={{
                width: "25px",
                height: "23px",
                marginRight: "5px",
                color: "#808080",
              }}
            />
            비밀번호 확인
          </S.CategoryTitle>
          <S.EditInput
            {...props.register("newPassword2")}
            type="password"
          ></S.EditInput>
        </S.ProfileBody>
        <S.ErrorMessage>
          {props.formState.errors.newPassword2?.message}
        </S.ErrorMessage>
      </S.Wrapper>

      <S.ButtonWrapper>
        <BasicButton
          type="button"
          onClick={props.onClickBackButton}
          title="돌아가기"
        ></BasicButton>
        <BasicButton type="submit" title="비밀번호 수정"></BasicButton>
      </S.ButtonWrapper>
    </form>
  );
}

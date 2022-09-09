import * as S from "./update-profile.styles";
import { IUpdateProfilePresenterProps } from "./update-profile.types";

export default function UpdateProfilePresenter(
  props: IUpdateProfilePresenterProps
) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickProfileEditButton)}>
      <S.Wrapper>
        <S.CategoryTitle>아이디</S.CategoryTitle>
        <S.EditInput
          {...props.register("email")}
          defaultValue={props.UserInfo?.fetchLoginUser.email}
        ></S.EditInput>
        <S.ErrorMessage>{props.formState.errors.email?.message}</S.ErrorMessage>
        <S.CategoryTitle>닉네임</S.CategoryTitle>
        <S.EditInput
          {...props.register("nickname")}
          defaultValue={props.UserInfo?.fetchLoginUser.nickname}
        ></S.EditInput>
        <S.ErrorMessage>
          {props.formState.errors.nickname?.message}
        </S.ErrorMessage>
        <S.ButtonWrapper>
          <S.ExpertButton type="button" onClick={props.onClickBackButton}>
            돌아가기
          </S.ExpertButton>
          <S.ExpertButton type="submit">수정하기</S.ExpertButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}

import BasicButton from "../../../commons/button";
import * as S from "./update-profile.styles";
import { HiMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { IUpdateProfilePresenterProps } from "./update-profile.types";

export default function UpdateProfilePresenter(
  props: IUpdateProfilePresenterProps
) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickProfileEditButton)}>
      <S.Wrapper>
        <S.ProfileBody>
          <S.CategoryTitle>
            <HiMail
              style={{
                width: "25px",
                height: "23px",
                marginRight: "5px",
                color: "#808080",
              }}
            />
            아이디
          </S.CategoryTitle>
          <S.EditInput
            {...props.register("email")}
            defaultValue={props.UserInfo?.fetchLoginUser.email}
          ></S.EditInput>
        </S.ProfileBody>
        <S.ErrorMessage>{props.formState.errors.email?.message}</S.ErrorMessage>

        <S.ProfileBody>
          <S.CategoryTitle>
            <BsFillPersonFill
              style={{
                width: "25px",
                height: "23px",
                marginRight: "5px",
                color: "#808080",
              }}
            />
            닉네임
          </S.CategoryTitle>
          <S.EditInput
            {...props.register("nickname")}
            defaultValue={props.UserInfo?.fetchLoginUser.nickname}
          ></S.EditInput>
        </S.ProfileBody>
        <S.ErrorMessage>
          {props.formState.errors.nickname?.message}
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
            비밀번호
          </S.CategoryTitle>
          <S.EditInput></S.EditInput>
        </S.ProfileBody>

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
          <S.EditInput></S.EditInput>
        </S.ProfileBody>
      </S.Wrapper>

      <S.ButtonWrapper>
        <BasicButton
          type="button"
          onClick={props.onClickBackButton}
          title="돌아가기"
        ></BasicButton>
        <BasicButton type="submit" title="프로필 수정"></BasicButton>
        <BasicButton type="button" title="비밀번호 수정"></BasicButton>
      </S.ButtonWrapper>
    </form>
  );
}

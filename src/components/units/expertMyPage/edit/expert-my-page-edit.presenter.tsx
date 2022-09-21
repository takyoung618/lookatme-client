import BasicButton from "../../../commons/button";
import * as S from "./expert-my-page-edit.styles";
import { IExpertMyPageEditPresenterProps } from "./expert-my-page-edit.types";

export default function ExpertMyPageEditPresenter(
  props: IExpertMyPageEditPresenterProps
) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickUpdateButton)}>
      <S.Wrapper>
        <S.Header>전문가 정보 수정</S.Header>
        <S.SpecialistWrapper>
          <S.SummaryWrapper>
            <S.Title>계정</S.Title>
            <S.AccountContents>
              {props.SpecialistData?.fetchLoginSpecialist.account}
            </S.AccountContents>
          </S.SummaryWrapper>
          <S.SummaryWrapper>
            <S.Title>이름</S.Title>
            <S.Contents {...props.register("name")}></S.Contents>
          </S.SummaryWrapper>
          <S.SummaryWrapper>
            <S.Title>요약</S.Title>
            <S.Contents {...props.register("summary")}></S.Contents>
          </S.SummaryWrapper>
          <S.SummaryWrapper>
            <S.Title>소개</S.Title>
            <S.Contents {...props.register("introduction")}></S.Contents>
          </S.SummaryWrapper>
          <S.SummaryWrapper>
            <S.Title>약력</S.Title>
            <S.Contents {...props.register("career")}></S.Contents>
          </S.SummaryWrapper>
          <S.SummaryWrapper>
            <S.Title>가격</S.Title>
            <S.Contents {...props.register("price")}></S.Contents>
          </S.SummaryWrapper>
        </S.SpecialistWrapper>

        <S.ButtonWrapper>
          <BasicButton title="수정하기"></BasicButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}

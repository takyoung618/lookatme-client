import * as S from "./CommentWrite.styles";
import { ICommentWritePresenterProps } from "./CommentWrite.types";

export default function CommentWritePresenter(
  props: ICommentWritePresenterProps
) {
  return (
    <S.Wrapper>
      <S.CommentWriteWrapper>
        <S.CommentInput
          onChange={props.onChangeComment}
          placeholder="1000자 이내로 댓글을 입력해주세요."
          maxLength={1000}
          value={
            (props.isExpertCommentEdit && props.text) ||
            props.SpecialistCommentEl?.text ||
            (props.isUserCommentEdit && props.text) ||
            props.UserCommentEl?.text ||
            props.text
          }
        ></S.CommentInput>
        <S.CommentWriteBottom>
          <S.CommentLengthInfo>
            {(props.text
              ? props.textLength
              : props.isSpecialist
              ? props.SpecialistCommentEl?.text.length
              : props.UserCommentEl?.text.length) || 0}
            자 / 1000자
          </S.CommentLengthInfo>
          <S.CommentButton
            onClick={
              props.isSpecialist
                ? props.isExpertCommentEdit
                  ? props.onClickSpecialistCommentEditButton
                  : props.onClickSpecialistCommentButton
                : (props.isUserCommentEdit &&
                    props.onClickUserCommentEditButton) ||
                  props.onClickUserCommentButton
            }
          >
            댓글 작성
          </S.CommentButton>
        </S.CommentWriteBottom>
        <S.ErrorMessage>{props.textError}</S.ErrorMessage>
      </S.CommentWriteWrapper>
    </S.Wrapper>
  );
}

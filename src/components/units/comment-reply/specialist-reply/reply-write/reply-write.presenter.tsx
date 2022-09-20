import * as S from "./reply-write.styles";

import { ISpecialistReplyWritePresenterProps } from "./reply-write.types";

export default function SpecialistReplyWritePresenter(
  props: ISpecialistReplyWritePresenterProps
) {
  return (
    <S.Wrapper>
      <S.CommentWriteWrapper>
        <S.CommentInput
          placeholder="1000자 이내로 댓글을 입력해주세요."
          maxLength={1000}
          onChange={props.onChangeSpecialistUnderComment}
          defaultValue={
            props.isEdit
              ? props.contents || props.SpecialistUnderCommentEl.contents
              : props.contents
          }
        ></S.CommentInput>
        <S.CommentWriteBottom>
          <S.CommentLengthInfo>
            {(props.contents
              ? props.contentsLength
              : props.SpecialistUnderCommentEl?.contents.length) || 0}
            자 / 1000자
          </S.CommentLengthInfo>
          <S.CommentButton
            onClick={
              props.isEdit
                ? props.onClickUpdateSpecialistUnderComment
                : props.onClickSpecialistUnderComment
            }
          >
            답글 작성
          </S.CommentButton>
        </S.CommentWriteBottom>
        <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
      </S.CommentWriteWrapper>
    </S.Wrapper>
  );
}

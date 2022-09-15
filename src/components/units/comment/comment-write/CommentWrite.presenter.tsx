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
        ></S.CommentInput>
        <S.CommentWriteBottom>
          <S.CommentLengthInfo>
            {props.commentLength}자 / 1000자
          </S.CommentLengthInfo>
          <S.CommentButton onClick={props.onClickCommentButton}>
            댓글 작성
          </S.CommentButton>
        </S.CommentWriteBottom>
        <S.ErrorMessage>{props.commentError}</S.ErrorMessage>
      </S.CommentWriteWrapper>
    </S.Wrapper>
  );
}

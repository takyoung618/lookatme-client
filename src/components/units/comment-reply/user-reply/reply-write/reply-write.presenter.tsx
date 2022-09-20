import * as S from "./reply-write.styles";
import { IUserReplyWritePresenterProps } from "./reply-write.types";

export default function UserReplyWritePresenter(
  props: IUserReplyWritePresenterProps
) {
  return (
    <S.Wrapper>
      <S.CommentWriteWrapper>
        <S.CommentInput
          placeholder="1000자 이내로 댓글을 입력해주세요."
          maxLength={1000}
          onChange={props.onChangeUnderComment}
          defaultValue={
            props.isEdit
              ? props.contents || props.UserUnderCommentEl.contents
              : props.contents
          }
        ></S.CommentInput>
        <S.CommentWriteBottom>
          <S.CommentLengthInfo>
            {(props.contents
              ? props.contentsLength
              : props.UserUnderCommentEl?.contents.length) || 0}
            자 / 1000자
          </S.CommentLengthInfo>
          <S.CommentButton
            onClick={
              props.isEdit
                ? props.onClickUpdateUserUnderComment
                : props.onClickUserUnderComment
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

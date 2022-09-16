import { useRecoilState } from "recoil";
import {
  isExpertCommentEditState,
  isUserCommentEditState,
} from "../../../../commons/store";
import * as S from "./CommentWrite.styles";
import { ICommentWritePresenterProps } from "./CommentWrite.types";

export default function CommentWritePresenter(
  props: ICommentWritePresenterProps
) {
  const [isExpertCommentEdit, setExpertCommentEdit] = useRecoilState(
    isExpertCommentEditState
  );
  const [isUserCommentEdit, setIsUserCommentEdit] = useRecoilState(
    isUserCommentEditState
  );

  return (
    <S.Wrapper>
      <S.CommentWriteWrapper>
        <S.CommentInput
          onChange={props.onChangeComment}
          placeholder="1000자 이내로 댓글을 입력해주세요."
          maxLength={1000}
          // value={
          //   isUserCommentEdit
          //     ? props.comment || props.UserCommentEl?.text
          //     : props.comment
          // }
        ></S.CommentInput>
        <S.CommentWriteBottom>
          <S.CommentLengthInfo>
            {/* {(props.comment
              ? props.commentLength
              : props.UserCommentEl.text.length) || 0} */}
            {props.commentLength}자 / 1000자
          </S.CommentLengthInfo>
          <S.CommentButton
            onClick={
              props.isSpecialist?.isSpecialist
                ? props.onClickSpecialistCommentButton
                : props.onClickUserCommentButton
            }
          >
            댓글 작성
          </S.CommentButton>
        </S.CommentWriteBottom>
        <S.ErrorMessage>{props.commentError}</S.ErrorMessage>
      </S.CommentWriteWrapper>
    </S.Wrapper>
  );
}

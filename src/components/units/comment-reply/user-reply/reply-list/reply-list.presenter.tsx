import UserReplyEditContainer from "../reply-edit/reply-edit.container";
import { IUserReplyListPresenterProps } from "./reply-list.types";

export default function UserReplyListPresenter(
  props: IUserReplyListPresenterProps
) {
  return (
    <>
      {props.UserUnderCommentData?.fetchUnderCommentsWithCommentId.map(
        (UserUnderCommentEl) => (
          <UserReplyEditContainer
            key={UserUnderCommentEl.id}
            UserUnderCommentEl={UserUnderCommentEl}
            UserUnderCommentData={props.UserUnderCommentData}
          ></UserReplyEditContainer>
        )
      )}
    </>
  );
}

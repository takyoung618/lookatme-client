import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";
import UserReplyListPresenter from "./reply-list.presenter";
import { FETCH_UNDER_COMMENTS_WITH_COMMENT_ID } from "./reply-list.queries";
import { IUserReplyListContainerProps } from "./reply-list.types";

export default function UserReplyListContainer(
  props: IUserReplyListContainerProps
) {
  const { data: UserUnderCommentData } = useQuery<
    Pick<IQuery, "fetchUnderCommentsWithCommentId">
  >(FETCH_UNDER_COMMENTS_WITH_COMMENT_ID, {
    variables: { commentId: props.UserCommentEl.id },
  });

  return (
    <UserReplyListPresenter
      UserUnderCommentData={UserUnderCommentData}
    ></UserReplyListPresenter>
  );
}

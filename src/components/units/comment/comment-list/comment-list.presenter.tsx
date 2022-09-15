import CommentEditExpertContainer from "../comment-edit/expert/comment-edit-expert.container";
import CommentEditUserContainer from "../comment-edit/user/comment-edit-user.container";

export default function CommentListPresenter() {
  return (
    <>
      <CommentEditExpertContainer></CommentEditExpertContainer>

      <CommentEditUserContainer></CommentEditUserContainer>
    </>
  );
}

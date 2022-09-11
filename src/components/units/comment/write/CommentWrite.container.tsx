import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentWriteUI from "./CommentWrite.presenter";
import { CREATE_COMMENT } from "./CommentWrite.queries";


export default function CommentWriteContainer(){
    const router = useRouter();

    const [createComment] = useMutation(CREATE_COMMENT)

    const [text, setText] = useState("");
    const [textError, setTextError] = useState("");
    const [isActive, setIsActive] = useState(false);

    const onChangeText = (event) => {
        setText(event.target.value);
        event.target.value
        ? setTextError("")
        : setTextError("댓글을 입력하세요.");
        event.target.value ? setIsActive(true) : setIsActive(false);
    };


    // 댓글 작성
    const onClickWriteComment = async () => {
        text ? setTextError("") : setTextError("댓글을 입력하세요.");
        if (text) {
            await createComment({
            variables: {
                createCommentInput: {
                text,
                },
                // api 나오면 수정
                useditemId: String(router.query.productId),
            },
            refetchQueries: [
                {
                query: CREATE_COMMENT,
                // api 나오면 수정
                variables: { useditemId: router.query.productId },
                },
            ],
            });
        setText("");
        console.log(setText)
        }
    };

    // 댓글 수정
    const onClickEditComment = async () => {
        if (!contents) {
          message.warning("수정한 내용이 없습니다.");
          return;
        }
    
        try {
          const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {};
          if (contents) updateUseditemQuestionInput.contents = contents;
    
          await updateUseditemQuestion({
            variables: {
              updateUseditemQuestionInput,
              useditemQuestionId: String(props.el?._id),
            },
            update(cache, { data }) {
              cache.modify({
                fields: {
                  fetchUseditemsQuestions: (prev) => {
                    return [data?.createUseditemQuestion, ...prev];
                  },
                },
              });
            },
            // refetchQueries: [
            //   {
            //     query: FETCH_USED_ITEM_QUESTIONS,
            //     variables: { useditemId: router.query.productId },
            //   },
            // ],
          });
          props.setIsEdit?.(false);
          message.success("댓글이 수정되었습니다.");
        } catch (error) {
          if (error instanceof Error) Modal.error({ content: error.message });
        }
      };

    return (
        <CommentWriteUI
            text={text}
            textError={setTextError}
            onChangeText={onChangeText}
            onClickWriteComment={onClickWriteComment}
            // el={props.el}
            // isEdit={props.isEdit}
            // onClickEditComment={onClickEditComment}
        />
    )
}

import * as S from "./CommunityWrite.styles"
import { v4 as uuidv4 } from "uuid";
import UploadImageContainer from "../../../commons/uploadImage/UploadImage.container"
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";
import dynamic from "next/dynamic";
// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';

const ToastEditor = dynamic(() => import("../../../commons/toast/Toast"), {
    ssr: false,
});

export default function CommunityWriteUi(props){
    // const [defaultValue, setDefaultValue] = useState("");
    // const [isEdit, setIsEdit] = useRecoilState(isEditState);

    // 솔직히 왜쓰는지 이해가 안가요,,
    // useEffect(() => {
    //     if (props.data?.fetchStory.title) {
    //       setDefaultValue(props.data?.fetchStory);
    //     }
    //     setIsEdit(true);
    // }, [props.data?.fetchStory]);
    
    return (
        <form
        onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickCreate)
            }
        >  
        <S.Wrapper>
            <S.Header>{props.isEdit ? "사연수정" : "사연등록"}</S.Header>
            <S.CategoryWrapper value={props.selected} onChange={props.onChangeSelect}
            defaultValue={props.data?.fetchStory.category.name}
            >
                <option value="" >카테고리</option>
                <option {...props.register("categoryName")}>직업,진로</option>
                <option value="연애,결혼">연애,결혼</option>
                <option value="대인관계">대인관계</option>
                <option value="자아,성격">자아,성격</option>
                <option value="가족">가족</option>
                <option value="자유주제">자유주제</option>
            </S.CategoryWrapper>
            <S.TitleWrapper>
                <S.Title>고민제목</S.Title>
                <S.TitleInput type="text"
                {...props.register("title")}
                placeholder="제목을 입력해주세요"
                defaultValue={props.data?.fetchStory.title}
                >
                </S.TitleInput>
            </S.TitleWrapper>
            <S.TextWrapper id="editor">
                <S.Text
                >
                고민내용</S.Text>
            </S.TextWrapper>
                <S.EditorWrapper>
                    <ToastEditor
                    {...props.register("text")}
                    onChangeText={props.onChangeText}
                    defaultValue={props.data?.fetchStory.text}
                    />
                </S.EditorWrapper> 
            <S.ImageWrapper>
            {props.fileUrls.map((el, index) => (
                <UploadImageContainer
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                ></UploadImageContainer>
               ))}
            </S.ImageWrapper>
            <S.ButtonWrapper>
                <S.ListButton onClick={props.onClickList}>목록으로</S.ListButton>
                <S.CreateButton >{props.isEdit ? "수정하기" : "등록하기"}</S.CreateButton>
            </S.ButtonWrapper>
        </S.Wrapper>
        </form>
    ) 
}




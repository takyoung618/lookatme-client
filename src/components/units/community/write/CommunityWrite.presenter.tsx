import * as S from "./CommunityWrite.styles"
import { v4 as uuidv4 } from "uuid";
import {IoIosArrowDown } from "react-icons/io"
import UploadImageContainer from "../../../commons/uploadImage/UploadImage.container"

export default function CommunityWriteUi(props){
    return (
        // <form
        //     onSubmit={
        //     props.isEdit
        //     ? props.handleSubmit(props.onClickUpdateButton)
        //     : props.handleSubmit(props.onClickCreateButton)
        // }
        // >
        <S.Wrapper>
            <S.Title>{props.isEdit ? "사연 등록" : "상품 등록"}</S.Title>
        <S.Category>
            <S.CategoryTitle
            >카테고리 선택</S.CategoryTitle>
            <IoIosArrowDown style={{ width: "30px", height: "30px", marginTop: "6px" }}/>
            <S.CategoryNameInput
                // {...props.register("category.name")}
            />
        </S.Category>
        <S.TitleWrapper>
            <S.Title>사연제목</S.Title>
            <S.TitleInput
            // {...props.register("title")}
            />
        </S.TitleWrapper>
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
        <S.ContentsWrapper>
            <S.Contents
            // {...props.register("text")}
            >
            </S.Contents>
        </S.ContentsWrapper>
        <S.ButtonWrapper>
            <S.ListButton type="button" onClick={props.onClickList}>
                목록으로
            </S.ListButton>
            <S.SubmitButton type="button" onClick={props.onClickCreate}>
                작성하기
            </S.SubmitButton>
        </S.ButtonWrapper>
    </S.Wrapper>
    // </form>
    ) 
}
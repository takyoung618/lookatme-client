import * as S from "./CommunityWrite.styles"
import { v4 as uuidv4 } from "uuid";
import {IoIosArrowDown } from "react-icons/io"
import UploadImageContainer from "../../../commons/uploadImage/UploadImage.container"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";

export default function CommunityWriteUi(props){
    const [defaultValue, setDefaultValue] = useState("");
    const [isEdit, setIsEdit] = useRecoilState(isEditState);

    useEffect(() => {
        if (props.data?.fetchStory.text) {
          setDefaultValue(props.data?.fetchStory.text);
        }
        setIsEdit(true);
    }, [props.data?.fetchStory.text]);

    return (
        <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickCreate)
        }
        >  
        <S.Wrapper>
            <S.Header>{props.isEdit ? "사연등록" : "사연수정"}</S.Header>
            <S.CategoryWrapper name="categoryName"
            >
                <option value="" 
                >카테고리</option>
                <option {...props.register("category.name")}>직업,진로</option>
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
            <S.TextWrapper>
                <S.Text
                >
                고민내용</S.Text>
                <S.TextInput
                {...props.register("text")}
                placeholder="내용을 입력해주세요"
                defaultValue={props.data?.fetchStory.title}
                >
                </S.TextInput>
            </S.TextWrapper>
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
                <S.CreateButton onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}>{props.isEdit ? "수정하기" : "등록하기"}</S.CreateButton>
            </S.ButtonWrapper>
        </S.Wrapper>
        </form>
    ) 
}


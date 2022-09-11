import * as S from "./CommunityWrite.styles"
import { v4 as uuidv4 } from "uuid";
import {IoIosArrowDown } from "react-icons/io"
import UploadImageContainer from "../../../commons/uploadImage/UploadImage.container"

export default function CommunityWriteUi(props){
    return (
        <S.Wrapper>
            <S.Title>사연 등록</S.Title>
        <S.Category>
            <S.CategoryTitle
            >카테고리 선택</S.CategoryTitle>
            <IoIosArrowDown style={{ width: "16px", height: "16px", marginTop: "10px", marginRight: "10px" }}/>
        </S.Category>
        <S.TitleWrapper>
            <S.StoryTitle>고민제목</S.StoryTitle>
            <S.StoryTitleInput/>
        </S.TitleWrapper>
        <S.ContentsWrapper>
            <S.StoryText>고민내용</S.StoryText>
            <S.TextInput
            // {...props.register("text")}
            />
        
        </S.ContentsWrapper>
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
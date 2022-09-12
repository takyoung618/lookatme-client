import * as S from "./CommunityWrite.styles"
import { v4 as uuidv4 } from "uuid";
import {IoIosArrowDown } from "react-icons/io"
import UploadImageContainer from "../../../commons/uploadImage/UploadImage.container"

export default function CommunityWriteUi(props){
    return (
        <S.Wrapper>
            <S.Header>사연등록</S.Header>
            <S.CategoryWrapper>
                <S.CategoryTitle>
                    카테고리 선택
                </S.CategoryTitle>
                <IoIosArrowDown style={{ width: "16px", height: "16px", marginTop: "12px", marginRight: "16px" }}/>
            </S.CategoryWrapper>
            <S.TitleWrapper>
                <S.Title>고민제목</S.Title>
                <S.TitleInput type="text"
                placeholder="제목을 입력해주세요"
                >
                </S.TitleInput>
            </S.TitleWrapper>
            <S.TextWrapper>
                <S.Text>고민내용</S.Text>
                <S.TextInput
                placeholder="내용을 입력해주세요"
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
                <S.ListButton>목록으로</S.ListButton>
                <S.CreateButton>작성하기</S.CreateButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    ) 
}
// placeholder css 적용하기
// imagewrapper 정렬하고 아이콘 크기에 맞게 삽입

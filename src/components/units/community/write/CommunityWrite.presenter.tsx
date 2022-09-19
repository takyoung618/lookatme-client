import * as S from "./CommunityWrite.styles";
import { v4 as uuidv4 } from "uuid";
import UploadImageContainer from "../../../commons/uploadImage/UploadImage.container";
import { ICommunityWritePresenterProps } from "./CommunityWrite.types";

export default function CommunityWriteUi(props: ICommunityWritePresenterProps) {
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickCreate)
      }
    >
      <S.Wrapper>
        <S.Header>{props.isEdit ? "사연 수정" : "사연 등록"}</S.Header>
        <S.categoryWrapper>
          <S.Category
            {...props.register("categoryName")}
            defaultValue={props.data?.fetchStory.category.name}
          >
            <option value="">카테고리 선택</option>
            <option value="직업,진로">직업,진로</option>
            <option value="연애,결혼">연애,결혼</option>
            <option value="대인관계">대인관계</option>
            <option value="자아,성격">자아,성격</option>
            <option value="가족">가족</option>
            <option value="자유주제">자유주제</option>
          </S.Category>
          <S.CategoryErrorMessage>
            {props.formState.errors.categoryName?.message}
          </S.CategoryErrorMessage>
        </S.categoryWrapper>

        <S.BoxWrapper>
          <S.TitleWrapper>
            <S.Title>고민 제목</S.Title>
            <S.TitleInput
              type="text"
              {...props.register("title")}
              placeholder="제목을 작성해주세요"
            ></S.TitleInput>
            <S.ErrorMessage>
              {props.formState.errors.title?.message}
            </S.ErrorMessage>
          </S.TitleWrapper>

          <S.TitleWrapper>
            <S.Title>고민 내용</S.Title>
            {props.isEdit ? (
              props.data?.fetchStory.text && (
                <S.TextStory
                  onChange={props.onChangeContents}
                  placeholder="내용을 작성해주세요."
                  defaultValue={props.data.fetchStory.text}
                />
              )
            ) : (
              <S.TextStory
                onChange={props.onChangeContents}
                placeholder="내용을 입력해주세요."
              />
            )}
            <S.ErrorMessage>
              {props.formState.errors.text?.message}
            </S.ErrorMessage>
          </S.TitleWrapper>

          <S.ImageWrapper>
            <S.Title>사진 업로드 (선택사항)</S.Title>
            <S.ImageButtonWrapper>
              {props.fileUrls.map((el, index) => (
                <UploadImageContainer
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                ></UploadImageContainer>
              ))}
            </S.ImageButtonWrapper>
          </S.ImageWrapper>
          <S.ButtonWrapper>
            <S.ListButton onClick={props.onClickList} type="button">
              목록으로
            </S.ListButton>
            <S.ListButton>
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.ListButton>
          </S.ButtonWrapper>
        </S.BoxWrapper>
      </S.Wrapper>
    </form>
  );
}

import styled from "@emotion/styled";
import { IUploadImagePresenterProps } from "./UploadImage.types";

const PhotoUpload = styled.img`
  width: 30%;
  height: 120px;
  cursor: pointer;
`;

const PhotoInput = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border: solid 1px #f5f5f5;
  width: 30%;
  height: 120px;
  cursor: pointer;
`;

const UploadFileHidden = styled.input`
  display: none;
`;

export default function UploadImagePresenter(
  props: IUploadImagePresenterProps
) {
  return (
    <>
      {props.fileUrl ? (
        <PhotoUpload
          onClick={props.onClickUpload}
          src={props.fileUrl}
        ></PhotoUpload>
      ) : (
        <PhotoInput onClick={props.onClickUpload} type="button">
          <img
            src="/사진업로드.png/"
            style={{
              width: "27px",
              height: "28px",
            }}
          />
        </PhotoInput>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      ></UploadFileHidden>
    </>
  );
}

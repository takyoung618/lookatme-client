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
            src="https://storage.googleapis.com/lookatme-storage/2022/9/21/95a9ca66-15c2-420d-9897-a5476f1c7a66/origin/upload-image.png"
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

import styled from "@emotion/styled";
import { FiUpload } from "react-icons/fi";
import { IUploadImagePresenterProps } from "./UploadImage.types";

const PhotoUpload = styled.img`
  width: 70px;
  height: 70px;
`;

const PhotoInput = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border: solid 1px #c5c5c5;

  width: 70px;
  height: 70px;
  border: solid 1px #c5c5c5;
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

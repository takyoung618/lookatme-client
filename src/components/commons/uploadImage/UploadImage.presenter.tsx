import styled from "@emotion/styled";
import { FiUpload } from "react-icons/fi";
import { IUploadImagePresenterProps } from "./UploadImage.types";

const PhotoUpload = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 30px;
`;

const PhotoInput = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 4.861vw;
  height: 4.861vw;
  background-color: gray;
  border: solid 1px #c5c5c5;
  margin-right: 30px;
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
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        ></PhotoUpload>
      ) : (
        <PhotoInput onClick={props.onClickUpload} type="button">
          <FiUpload
            style={{
              width: "70px",
              height: "70px",
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

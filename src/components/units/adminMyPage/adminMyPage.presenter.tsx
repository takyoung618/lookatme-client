import { GiSiren } from "react-icons/gi";
import * as S from "./adminMyPage.styles";

export default function AdminMyPageUI() {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerHeader>
          <S.Title>전문가 관리</S.Title>
          <button>전문가 계정 생성하기</button>
        </S.InnerHeader>
        <S.Profile>
          <S.ProfileImg />
          <S.ProfileDetail>
            <S.Name>이름</S.Name>
            <S.Introduce>자기소개</S.Introduce>
          </S.ProfileDetail>
          <S.DeleteBtn>삭제하기</S.DeleteBtn>
        </S.Profile>
      </S.InnerWrapper>
      <S.InnerWrapper>
        <S.InnerHeader>
          <S.Title>신고 목록 관리</S.Title>
        </S.InnerHeader>
        <S.Report>
          <S.ReportContents>내용내용내용내용내용내용</S.ReportContents>
          <S.ReportDetail>
            <div>
              <GiSiren
                style={{
                  width: "25px",
                  height: "25px",
                  color: "red",
                  marginRight: "9px",
                  marginBottom: "5px",
                }}
              />
              1명이 신고
            </div>
            <S.DeleteBtn>삭제하기</S.DeleteBtn>
          </S.ReportDetail>
        </S.Report>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}

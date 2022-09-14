import styled from "@emotion/styled";
import { Collapse } from "antd";
import React from "react";

const { Panel } = Collapse;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 414px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const FAQ = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 30px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & img {
    width: 50%;
    height: 50%;
  }
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 700;
  margin-top: 10px;
`;

export default function FaqUI() {
  const onChange = (key: string | string[]) => {};

  return (
    <Wrapper>
      <ImageWrapper>
        <img src="/main/FAQ.jpg" alt="" />
      </ImageWrapper>
      <Title>자주 묻는 질문</Title>
      <FAQ>
        <Collapse defaultActiveKey={["1"]} onChange={onChange}>
          <Panel
            header="룩앳미 소개"
            key="1"
            style={{
              fontSize: "1.2rem",
            }}
          >
            <p>
              본인의 고민,우울,불안 등 오프라인에서 전문가와 상담받기 부담스러운
              사람들에게 온라인 환경에서 편하고 간편하게 채팅으로 접근할 수 있는
              환경을 제공합니다.
            </p>
          </Panel>
          <Panel
            header="전문가들은 검증된 사람들인가요?"
            key="2"
            style={{
              fontSize: "1.2rem",
            }}
          >
            <p>
              전문가로 등록하고자 하는 분들은 직접 검증 서류를 팩스,방문접수
              등으로 받고 까다로운 검증을 거쳐 선정합니다. 회사에서 자체적으로
              관리하기 때문에 상담 과정에서 문제 등이 생겨 신고가 들어올 경우
              전문가 권한을 박탈하는 등 제재를 가할 수 있습니다.
            </p>
          </Panel>
          <Panel
            header="상담은 어떻게 이루어지나요?"
            key="3"
            style={{
              fontSize: "1.2rem",
            }}
          >
            <p>
              원하시는 전문가 소개 탭에서 전문가와 상담을 신청해 티켓을
              구매하시고 원하실 때 전문가에게 채팅을 걸 수 있습니다. 전문가와
              채팅에서 조율하여 시간을 조정하시고, 채팅으로 상담을 진행하시면
              됩니다.
            </p>
          </Panel>
        </Collapse>
      </FAQ>
    </Wrapper>
  );
}

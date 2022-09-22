import styled from "@emotion/styled";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  font-size: 3rem;
  font-weight: 700;
  margin: 100px 0px;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 70px;
`;

export default function PostItContainer() {
  return (
    <>
      <Title>
        🚧<br></br>
        <br></br>서비스 준비 중<br></br> 입니다!<br></br>
      </Title>
      <SubTitle>
        항상 룩앳미를 <br></br>이용해주셔서 감사합니다
      </SubTitle>
    </>
  );
}

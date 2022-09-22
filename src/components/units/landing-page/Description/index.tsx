import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/libraries/useScrollFadeIn";

export default function Description() {
  const firstAnimated = useScrollFadeIn("up", 0.6, 0.5);
  const secondAnimated = useScrollFadeIn("up", 0.3, 0.7);

  const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #73c0a9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 20px 100px 20px;
    color: #fff;
    border-bottom: 1px solid #73c0a9;
  `;

  const Image = styled.img`
    width: 200px;
    height: 200px;
  `;

  const Title = styled.div`
    font-size: 1.7rem;
    margin-bottom: 2.7rem;
  `;

  const Text = styled.div`
    white-space: pre-wrap;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.75;
  `;

  return (
    <Container>
      <div>
        <Image src="https://storage.googleapis.com/lookatme-storage/2022/9/21/a69ae0a4-ca17-4df0-af23-c10c68ea1e28/origin/logo.png" />
      </div>
      <Title {...firstAnimated}>룩앳미란?</Title>
      <Text {...secondAnimated}>
        LookAtMe(룩앳미)는
        <br />
        본인의 심리적인 고민, 문제를
        <br />
        온라인 커뮤니티를 통해 부담없이
        <br />
        공유하는 플랫폼입니다.
        <br /> <br />
        또한, 심리 전문가와 장소 구애없이 <br />
        실시간 채팅으로 상담받을 수 있는 <br /> 서비스를 제공합니다.
      </Text>
    </Container>
  );
}

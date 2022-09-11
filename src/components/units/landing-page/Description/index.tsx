import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../commons/libraries/useScrollFadeIn";

export default function Description() {
  const firstAnimated = useScrollFadeIn("up", 1, 0);
  const secondAnimated = useScrollFadeIn("up", 0.5, 0);

  const Container = styled.div`
    width: 100vw;
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
        <Image src="/landing/logo.png" />
      </div>
      <Title {...firstAnimated}>룩앳미란?</Title>
      <Text {...secondAnimated}>
        본인의 고민, 정신적인 문제를 온라인에서 실시간 채팅으로 편하게 상담받을
        수 있는 플랫폼입니다.
      </Text>
    </Container>
  );
}

import { useRef, useEffect, useCallback, MutableRefObject } from "react";

interface ScrollFadeIn {
  // 반환 타입 정의
  ref?: MutableRefObject<HTMLDivElement>;
  style: {
    opacity: number;
    transform: string;
  };
}

const useScrollFadeIn = (
  direction = "up", // default parameter
  duration = 1,
  delay = 0
): ScrollFadeIn => {
  // Ref는 포커스, 미디어 재생 또는 애니메이션을 직접적으로 실행 시키기 위해
  // 외부에서 DOM(또는 React Component)을 제어 할 수 있게 도와줍니다.
  const dom = useRef<HTMLDivElement>(null);

  // name이 up이면 아래서 위로 올라오는 모션
  // stay는 움직임 없이 투명도에 변화만 주고싶을때 사용
  const handleDirection = (name: string) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      case "stay":
        return "translate3d(0, 0, 0)";
      default:
    }
  };

  // 관찰할 대상이 등록되거나 가시성(보이는지 안보이는지)에 변화가 생기면 관찰자는 콜백(Callback)을 실행한다.
  const handleScroll = useCallback(
    ([entry]) => {
      const {
        current: { style },
      } = dom;

      // 만약 원하는 threshold만큼 노출되었다면,
      if (entry.isIntersecting) {
        style.transitionProperty = "all";

        // 애니메이션 동작 시간
        style.transitionDuration = `${duration}s`;
        style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";

        // 지연시간 => 여러 컴포넌트를 각각 다른 시간에 보여주고 싶으면 사용할 수 있다.
        style.transitionDelay = `${delay}s`;

        // transition과 함께 투명도와 위치를 원래대로 되돌린다.
        style.opacity = "1";
        style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: any;
    const { current } = dom;

    if (current) {
      // IntersectionObserver에 동작 하게 할 함수와 Observer 세팅 값들을 넘겨 줍니다.
      // - 'threshold'는 TargetElement의 노출 비율을 말하는 것이며,
      // -  0.5는 50% 정도 노출 되었을 때 해당 이벤트가 실행되게 됩니다.
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  // useScrollFadeIn를 사용할 DOM에 지정할 CSS 속성들
  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;

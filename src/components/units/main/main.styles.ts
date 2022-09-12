import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  max-width: 414px;
  overflow-x: hidden;

  & button {
    cursor: pointer;
    text-align: center;
    padding: 12px 14px;
    border-radius: 10px;
    border: none;
  }
`;

export const SliderItem1 = styled.div`
  height: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("/main/배경1.png");
`;

export const SliderItem2 = styled.div`
  height: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("/main/배경2.png");
`;

export const Category = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & img {
    width: 64px;
    height: 64px;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

export const Reviews = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 1.7rem;
  font-weight: 700;
  font-size: 1.2rem;
  background-color: #f5f7fa;
  width: 414px;
  height: 350px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const ReviewItem = styled.div`
  width: 326px;
  height: 227px;
  background-color: #ffffff;
  padding: 1.2rem;
  border-radius: 1.7rem;
`;

export const ExpertName = styled.h2`
  font-size: 1.2rem;
  color: #2b2ab8;
`;

export const ReviewCont = styled.p`
  font-size: 1rem;
  color: #c7c8cb;
  height: 100px;
  padding: 30px 0;
`;

export const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #c7c8cb;
`;

export const NickName = styled.h2`
  font-size: 0.9rem;
  color: #acaeb2;
`;

export const CreatedAt = styled.span``;

export const MoveBtn = styled.span`
  background: none;
  font-size: 1rem;
  position: relative;
  left: 150px;
  bottom: -30px;
  color: #99dce0;
`;

export const Experts = styled.div`
  margin-top: 1.7rem;
  padding: 1.2rem;
`;

export const ExpertsTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const SemiTitle = styled.h2`
  color: #c7c8cb;
  margin: 0.7rem 0 1.2rem;
`;

export const ExpertsItem = styled.div`
  width: 250px;
  height: 350px;
  box-shadow: 0 10px 20px #bee9eb;
  text-align: center;
  overflow: hidden;
  margin: 1rem auto;

  & h3 {
    margin-bottom: 10px;
    font-size: 1.7rem;
  }
`;

export const ItemImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 8px solid white;
  position: relative;
  top: 145px;
  left: 140px;
  box-shadow: 0 2px 15px rgb(58, 54, 54);
  transform: rotate(-20deg);
`;

export const Shape = styled.div`
  width: 350px;
  height: 200px;
  background: linear-gradient(
    9deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(153, 224, 208, 1) 0%,
    rgba(227, 240, 228, 1) 71%
  );
  margin-left: -20px;
  position: relative;
  top: -80px;
  transform: rotate(25deg);
`;

export const Job = styled.h2`
  color: rgb(105, 100, 109);
  margin-bottom: 0.7rem;
`;

export const Carrier = styled.p`
  padding-left: 30px;
  padding-right: 30px;
  color: rgb(105, 100, 109);
  line-height: 1.2rem;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 1.5rem;
  text-shadow: 1px solid black;
  font-size: 1.2rem;
  font-weight: 900;
  color: #99dce0;
`;

export const OfficialBtn = styled.button`
  width: 11rem;
  height: 8rem;
  margin-bottom: 1.2rem;

  background: url("/main/공지사항.jpg") center center no-repeat;
  background-size: cover;
`;

export const FaqBtn = styled.button`
  width: 11rem;
  height: 8rem;
  background: url("/main/FAQ.jpg") center center no-repeat;
  background-size: cover;
  margin-bottom: 1.2rem;
`;

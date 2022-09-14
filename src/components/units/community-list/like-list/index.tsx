import * as S from "./styles";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

export default function LikeList(props) {
  return (
    <S.BodyWrapper>
      {props.likeData?.fetchStoriesByLike.map((el) => (
        <div key={el.id} id={el.id}>
          <S.Category>{el.category.name}</S.Category>
          <S.Title>{el.title}</S.Title>
          <S.Contents>{el.text}</S.Contents>
          <S.BodyBottomWrapper>
            <S.ContentsInfo>
              <S.LikeButton>
                <FaHeartbeat
                  style={{
                    width: "27px",
                    height: "23px",
                    color: "#73bea8",
                    marginRight: "5px",
                  }}
                />
              </S.LikeButton>
              <S.LikeInfo>
                {el.likes}명 공감 댓글 {el.commentCounts}개
              </S.LikeInfo>
            </S.ContentsInfo>
            <S.UserInfo>
              <S.UserProfile>
                <BsFillPersonFill
                  style={{
                    width: "27px",
                    height: "23px",
                    color: "#73bea8",
                  }}
                />
              </S.UserProfile>
              <S.UserName>{el.user.nickname}</S.UserName>
            </S.UserInfo>
          </S.BodyBottomWrapper>
        </div>
      ))}
    </S.BodyWrapper>
  );
}

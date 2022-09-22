import * as S from "./styles";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IQuery, IStory } from "../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

interface ILikeListProps {
  likeData: Pick<IQuery, "fetchStoriesByLike"> | undefined;
  FetchMoreLikeData: () => void;
}

export default function LikeList(props: ILikeListProps) {
  const router = useRouter();

  const onClickMoveToDetail = (LikeList: IStory) => () => {
    router.push(`/community/${LikeList.id}`);
  };

  return (
    <S.BodyWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.FetchMoreLikeData}
        hasMore={true}
        useWindow={false}
      >
        {props.likeData?.fetchStoriesByLike.map((el) => (
          <S.MapWrapper
            key={el.id}
            id={el.id}
            onClick={onClickMoveToDetail(el)}
          >
            <S.Category>{el.category.name}</S.Category>
            <S.Title>{el.title}</S.Title>
            {typeof window !== "undefined" && (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    el.text.length >= 20 && el.text.substr(0, 100) + "..."
                  ),
                }}
              ></S.Contents>
            )}
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
          </S.MapWrapper>
        ))}
      </InfiniteScroll>
    </S.BodyWrapper>
  );
}

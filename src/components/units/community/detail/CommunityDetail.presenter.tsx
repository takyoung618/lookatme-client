import * as S from "./CommunityDetail.styles"
import {AiOutlineUser, AiOutlineClockCircle} from "react-icons/ai"
import { ImHeart } from "react-icons/im";
import {GiSiren} from "react-icons/gi"
import CommentUI from "../../comment/write/CommentWrite.presenter";
import CommentWriteContainer from "../../comment/write/CommentWrite.container";

export default function CommunityDetailUi(props){
    return (
        <S.Wrapper>
                <S.Title>상세 페이지</S.Title>
            <S.DetailWrapper>
                <S.HeaderWrapper>
                    <S.Category>
                        가족
                    </S.Category>
                    <S.InfoWrapper>
                        <S.NicknameWrapper>
                            <AiOutlineUser/>
                            <S.NickName> {props.data?.fetchLoginUser.nickname}</S.NickName>
                        </S.NicknameWrapper>
                        <S.TimeWrapper>
                            <AiOutlineClockCircle/>
                            <S.Time>{props.data?.fetchStory.createAt}</S.Time>
                        </S.TimeWrapper>
                    </S.InfoWrapper>
                </S.HeaderWrapper>
                <S.ContentsWrapper>
                    {props.data?.fetchStory.text}
                </S.ContentsWrapper>
                <S.FooterWrapper>
                    <S.SympathyWrapper>
                        <ImHeart
                        style={{ width: "15px", height: "15px", color: "#F293A3" }}
                        />
                        <S.Sympathy>0명 공감</S.Sympathy>
                    </S.SympathyWrapper>
                    <GiSiren style={{ width: "25px", height: "25px", color: "red", marginRight: "9px", marginBottom: "5px"}}/>
                </S.FooterWrapper>
            </S.DetailWrapper>
            <S.ButtonWrapper>
                <S.Button onClick={props.onClickMoveToList}>
                    목록으로
                </S.Button>
                <S.Button onClick={props.onClickMoveToEdit}>
                    수정하기
                </S.Button>
                <S.Button onClick={props.onClickDeleteStory}>
                    삭제하기
                </S.Button>
            </S.ButtonWrapper>

            <CommentWriteContainer/>
            
        </S.Wrapper>
    )
}
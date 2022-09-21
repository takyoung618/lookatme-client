import * as S from "./live-chat.styles";
import { FiSend } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { ILiveChatProps } from "./live-chat.types";

export default function LiveChatPresenter(props: ILiveChatProps) {
  return (
    <>
      <form
        onSubmit={
          !props.SpecialistData
            ? props.handleSubmit(props.onClickSendMessage)
            : props.handleSubmit(props.onClickSendSpecialMessage)
        }
      >
        <S.Wrapper>
          {props.data?.fetchChatLogs.map((el) => (
            <div key={uuidv4()}>
              {el.author === "USER" ? (
                <S.RightWrapper>
                  <S.NickName>{el.nickname}</S.NickName>
                  <S.RightMessage ref={props.messagesEndRef}>
                    {el.message}
                  </S.RightMessage>
                </S.RightWrapper>
              ) : (
                <S.LeftWrapper>
                  <S.NickName>{el.nickname}</S.NickName>
                  <S.LeftMessage ref={props.messagesEndRef}>
                    {el.message}
                  </S.LeftMessage>
                </S.LeftWrapper>
              )}
            </div>
          ))}

          {props.resultMsg.map((el) => (
            <div key={uuidv4()}>
              {el[2] === "user" ? (
                <S.RightWrapper>
                  <S.NickName>{el[0]}</S.NickName>
                  <S.RightMessage ref={props.messagesEndRef}>
                    {el[1]}
                  </S.RightMessage>
                </S.RightWrapper>
              ) : (
                <S.LeftWrapper>
                  <S.NickName>{el[0]}</S.NickName>
                  <S.LeftMessage ref={props.messagesEndRef}>
                    {el[1]}
                  </S.LeftMessage>
                </S.LeftWrapper>
              )}
            </div>
          ))}
        </S.Wrapper>
        <S.BottomWrapper>
          <S.MessageInput
            onKeyDown={props.onKeyDown}
            {...props.register("contents", { required: true })}
          ></S.MessageInput>
          <S.SendButton>
            <FiSend style={{ width: "20px", height: "20px", color: "#fff" }} />
          </S.SendButton>
        </S.BottomWrapper>
      </form>
    </>
  );
}

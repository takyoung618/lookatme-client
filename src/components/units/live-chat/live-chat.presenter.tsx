import * as S from "./live-chat.styles";
import { FiSend } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

export default function LiveChatPresenter(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSendMessage)}>
      <S.Wrapper>
        {props.data?.fetchChatLogs.map((el) => (
          <div key={uuidv4()}>
            {el.user.id === props.userId ? (
              <S.RightWrapper>
                <S.RightMessage ref={props.messagesEndRef}>
                  {el.message}
                </S.RightMessage>
              </S.RightWrapper>
            ) : (
              <S.LeftWrapper>
                <S.NickName>{el.user.nickname}</S.NickName>
                <S.LeftMessage ref={props.messagesEndRef}>
                  {el.message}
                </S.LeftMessage>
              </S.LeftWrapper>
            )}
          </div>
        ))}

        {props.resultMsg.map((el) => (
          <div key={uuidv4()}>
            {el[2] === props.userId ? (
              <S.RightWrapper>
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
        <S.SendButton type="submit">
          <FiSend style={{ width: "20px", height: "20px", color: "#fff" }} />
        </S.SendButton>
      </S.BottomWrapper>
    </form>
  );
}

export default function LiveChatPresenter(props) {
  return (
    <div>
      <main>
        {!props.chosenUsername ? (
          <>
            <h3>닉네임 입력</h3>
            <input
              value={props.username}
              onChange={(e) => props.setUsername(e.target.value)}
            ></input>
            <button
              onClick={() => {
                props.setChosenUsername(props.username);
              }}
            >
              입력
            </button>
          </>
        ) : (
          <>
            <p>이름: {props.username}</p>
            <div>
              <div>
                {props.messages.map((msg, i) => {
                  return (
                    <div key={i}>
                      {msg.author} : {msg.message}
                    </div>
                  );
                })}
              </div>
              <div>
                <input
                  value={props.message}
                  onChange={(e) => props.setMessage(e.target.value)}
                  onKeyUp={props.handleKeypress}
                ></input>
                <div>
                  <button
                    onClick={() => {
                      props.sendMessage();
                    }}
                  >
                    전송
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

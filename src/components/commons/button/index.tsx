interface IBasicButtonProps {
  title: String;
  onClick: () => void;
  isBig: Boolean;
}

export default function BasicButton(props: IBasicButtonProps) {
  return (
    <button
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.9375rem",
        fontWeight: "600",
        padding: "15px",
        border: "none",
        backgroundColor: "#73bea8",
        color: "#fff",
        borderRadius: "13px",
        height: props.isBig ? "50px" : "30px",
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

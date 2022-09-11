export default (props) => (
    <div style={{
        color: "blue",
        height: props.value,
        width: 50,
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        justifySelf: "center",
        border: "1px solid white"
    }}>{props.value}</div>
)
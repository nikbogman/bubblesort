import store from "../../stores";

export default (props) => {
    const lenght = store(state => state.lenght);
    return <div style={{
        color: "yellow",
        height: props.value * 5,
        width: sizeWidth(lenght),
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        justifySelf: "center",
        border: "1px solid white"
    }}>{props.value}</div>
}


function sizeWidth(len) {
    return (window.innerWidth / len) - 2;
}

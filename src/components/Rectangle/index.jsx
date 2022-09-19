import store from "../../stores";

export default (props) => {
    const lenght = store(state => state.lenght);
    const numerate = store(state => state.numerate);
    const outline = store(state => state.outline);

    return <div style={{
        color: "yellow",
        height: props.value * 5,
        width: (window.innerWidth / lenght) - (outline ? null : 2),
        backgroundColor: props.color,
        display: "flex",
        justifyContent: "center",
        justifySelf: "center",
        border: outline ? null : "1px solid white"
    }}>{numerate ? props.value : null}</div>
}


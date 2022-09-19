import store from "../../stores";
import "./style.css";

export default () => {
    const [outline, setOutline] = store(state => [
        state.outline,
        state.setOutline
    ]);

    function handleClick() {
        return setOutline(!outline)
    }

    return <button onClick={handleClick}>
        {outline ? "stroke" : "nostroke"}
    </button>
}
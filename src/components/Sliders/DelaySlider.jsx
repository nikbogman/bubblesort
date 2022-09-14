import store from "../../stores";
import "./style.css";

export default () => {
    const [delay, setDelay] = store(state => [
        state.delay,
        state.setDelay
    ])

    return <div className="slider">
        <label>delay</label>
        <input
            type="range"
            min="0"
            max="1000"
            step={100}
            value={delay}
            onChange={e => setDelay(e.target.value)}
        />
    </div>

}
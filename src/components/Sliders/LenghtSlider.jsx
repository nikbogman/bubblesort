import store from "../../stores";
import "./style.css";

export default () => {
    const [lenght, setLenght, isRunning] = store(state => [
        state.lenght,
        state.setLenght,
        state.isRunning
    ])

    return <div className="slider">
        <label>lenght</label>
        <input
            disabled={isRunning}
            type="range"
            min="10"
            max="100"
            step={10}
            value={lenght}
            onChange={e => setLenght(e.target.value)}
        />
    </div>
}
import store from "../../stores";
import "./style.css";

export default () => {
    const [isRunning, pause, play, sort] = store(state => [
        state.isRunning,
        state.pause,
        state.play,
        state.sort
    ]);

    function handleClick() {
        if (sort.loop && isRunning) return pause();
        else if (sort.loop && !isRunning) return play();
        else return;
    }

    return <button onClick={handleClick}>
        {isRunning ? "pause" : "play"}
    </button>
}
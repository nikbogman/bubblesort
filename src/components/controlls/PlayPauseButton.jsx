import store from "../../stores";

export default () => {
    const { isRunning, switchIsRunning } = store(state => ({
        isRunning: state.isRunning,
        switchIsRunning: state.switchIsRunning
    }));

    return <button onClick={switchIsRunning}>
        {isRunning ? "pause" : "play"}
    </button>
}
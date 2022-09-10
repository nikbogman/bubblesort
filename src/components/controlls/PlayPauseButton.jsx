import store from "../../stores";

export default () => {
    const { isRunning, pause, play, sort } = store(state => ({
        isRunning: state.isRunning,
        play: state.play,
        pause: state.pause,

        sort: state.sort
    }));

    return <button onClick={() => sort.loop ? pause() : play()}>
        {isRunning ? "pause" : "play"}
    </button>
}
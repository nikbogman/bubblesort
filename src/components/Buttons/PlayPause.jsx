import { useState } from "react";
import store from "../../stores";

export default () => {
    const { isRunning, pause, play, sort } = store(state => ({
        isRunning: state.isRunning,
        play: state.play,
        pause: state.pause,

        sort: state.sort
    }));

    function handleClick() {
        if (sort.loop && isRunning) return pause();
        else if (sort.loop && !isRunning) return play();
        else return;
    }

    return <button onClick={handleClick}>
        {isRunning ? "pause" : "play"}
    </button>
}
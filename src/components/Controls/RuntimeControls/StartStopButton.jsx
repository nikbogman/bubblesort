import React from "react";
import useStore from "../../../hooks/useStore";

const StartStopButton = () => {
    const [isRunning, stop, start, sort] = useStore(state => [
        state.isRunning,
        state.stop,
        state.start,
        state.sort
    ]);

    function handleClick() {
        if (!sort.loop) return;
        return isRunning ? stop() : start();
    }

    return <button onClick={handleClick}>
        {isRunning ? "Stop" : "Start"}
    </button>
}

export default StartStopButton;
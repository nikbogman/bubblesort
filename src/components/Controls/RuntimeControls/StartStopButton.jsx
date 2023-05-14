import React from "react";
import useStore from "src/hooks/useStore";
import { FaPlay, FaPause } from "react-icons/fa";
import Sort from "src/lib/sorts/Sort";

const StartStopButton = () => {
    const [isRunning, stop, start, sort] = useStore(state => [
        state.isRunning,
        state.stop,
        state.start,
        state.sort
    ]);

    function handleClick() {
        if (!(sort instanceof Sort)) return;
        return isRunning ? stop() : start();
    }

    return <button
        disabled={!(sort instanceof Sort)}
        className="start-stop-btn"
        onClick={handleClick}>
        {isRunning ? <FaPause size={20} /> : <FaPlay size={20} />}
    </button>
}

export default StartStopButton;
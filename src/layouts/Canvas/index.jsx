import React from "react";
import "./style.css";

import { array } from "../../lib/Array";
import Rectangle from "../../components/Rectangle";
import useInterval from "../../hooks/useInterval";
import store from "../../stores";

export default () => {
    const [triggerFrame, pause, sort, isRunning, delay] = store(state => [
        state.triggerFrame,
        state.pause,
        state.sort,
        state.isRunning,
        state.delay
    ])

    useInterval(() => {
        if (sort.loop) sort.loop(pause, triggerFrame);
    }, isRunning ? delay : null)

    return (
        <div className="Canvas">
            {array.values.map((v, i) => (<Rectangle value={array.values[i]} color={array.colors[i]} />))}
        </div>
    )
}
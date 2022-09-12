import React from "react";
import "./style.css";

import { array } from "../../lib/Array";
import Rectangle from "../../components/Rectangle";
import useInterval from "../../hooks/useInterval";
import store from "../../stores";

export default () => {
    const { _, triggerFrame, pause, sort, isRunning, delay } = store(state => ({
        _: state.frame,
        triggerFrame: state.triggerFrame,
        sort: state.sort,
        isRunning: state.isRunning,
        pause: state.pause,
        delay: state.delay
    }))

    useInterval(() => {
        if (sort.loop) sort.loop(pause, triggerFrame);
    }, isRunning ? delay : null)

    return (
        <div className="Canvas">
            {array.values.map(i => (<Rectangle value={i} />))}
        </div>
    )
}
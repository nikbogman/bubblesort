import React from "react";
import Rectangle from "../components/canvas/Rectangle";
import { array } from "../lib/Array";
import "./Canvas.css";
import store from "../stores";
import useInterval from "../utilities/useInterval";
import { BubbleSort } from "../lib/algorithms";

export default () => {
    const { _, triggerFrame, pause, sort, isRunning } = store(state => ({
        _: state.frame,
        triggerFrame: state.triggerFrame,
        sort: state.sort,
        isRunning: state.isRunning,
        pause: state.pause
    }))

    useInterval(() => {
        if (sort.loop) sort.loop(pause, triggerFrame);
    }, isRunning ? 100 : null)

    return (
        <div className="Canvas">
            {array.values.map(i => (<Rectangle value={i} />))}
        </div>
    )
}
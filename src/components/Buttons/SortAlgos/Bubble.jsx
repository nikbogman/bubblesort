import React from "react";
import store from "../../../stores";
import { BubbleSort } from "../../../lib/algorithms";

export default () => {
    const [isRunning, play, setSort, lenght] = store(state => [
        state.isRunning,
        state.play,
        state.setSort,
        state.lenght
    ]);


    return <button disabled={isRunning} onClick={() => {
        setSort(new BubbleSort(lenght))
        play()
    }}>bubbleSort</button>
}
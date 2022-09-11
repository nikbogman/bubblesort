import React from "react";
import store from "../stores";
import { BubbleSort } from "../lib/algorithms";

export default () => {
    const { isRunning, play, setSort } = store(state => ({
        isRunning: state.isRunning,
        play: state.play,
        setSort: state.setSort
    }));


    return <button disabled={isRunning} onClick={() => {
        setSort(new BubbleSort(10))
        play()
    }}>bubbleSort</button>
}
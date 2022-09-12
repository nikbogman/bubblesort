import React from "react";
import store from "../../../stores";
import { BubbleSort } from "../../../lib/algorithms";

export default () => {
    const { isRunning, play, setSort, lenght } = store(state => ({
        isRunning: state.isRunning,
        play: state.play,
        setSort: state.setSort,
        sort: state.setSort,
        lenght: state.lenght
    }));


    return <button disabled={isRunning} onClick={() => {
        setSort(new BubbleSort(lenght))
        play()
    }}>bubbleSort</button>
}
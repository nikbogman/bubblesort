import React from "react";
import store from "../stores";
import useInterval from "../utilities/useInterval";

let index = 0, lenght = 10;

export default () => {
    const {
        values, setValues,
        isRunning, pause, play
    } = store(state => ({
        values: state.values,
        setValues: state.setValues,

        isRunning: state.isRunning,
        pause: state.pause,
        play: state.play
    }));

    function action() {
        if (lenght == 1) return pause();
        if (index < lenght - 1) {
            let arr = [...get().values];
            if (arr[index] > arr[index + 1]) {
                var temp = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                setValues(arr);
            }
            index += 1
            return;
        }
        lenght -= 1;
        index = 0;
        return;
    }

    useInterval(() => action(), isRunning ? 500 : null)

    return <button onClick={play}>bubbleSort</button>
}
import { useEffect } from "react";
import store from "../../stores";
import { array } from "../../lib/Array";
import "./style.css";

export default () => {
    const [triggerFrame, isRunning, lenght, sort, setSort] = store(state => [
        state.triggerFrame,
        state.isRunning,
        state.lenght,
        state.sort,
        state.setSort
    ])

    function resetArray(lenght) {
        console.log(lenght);
        if (isRunning) return;
        array.reconstruct(lenght);
        setSort(undefined);
        return triggerFrame();
    }

    useEffect(() => resetArray(lenght), [lenght])
    return <button onClick={() => resetArray(lenght)}>reset</button>
}
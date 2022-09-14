import { useEffect } from "react";
import store from "../../stores";
import { array } from "../../lib/Array";

export default () => {
    const [triggerFrame, isRunning, lenght] = store(state => [
        state.triggerFrame,
        state.isRunning,
        state.lenght
    ])

    function resetArray(lenght) {
        console.log(lenght);
        if (isRunning) return;
        array.reconstruct(lenght);
        triggerFrame();
    }

    useEffect(() => resetArray(lenght), [lenght])
    return <button onClick={() => resetArray(lenght)}>reset</button>
}
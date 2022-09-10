import { useEffect } from "react";
import store from "../../stores";
import { array } from "../../lib/Array";

export default () => {
    const { triggerFrame, isRunning } = store(state => ({
        triggerFrame: state.triggerFrame,
        isRunning: state.isRunning
    }))

    function resetArray() {
        if (isRunning) return;
        array.reconstruct(10)
        triggerFrame()
    }

    useEffect(() => resetArray(), [])
    return <button onClick={() => resetArray()}>reset</button>
}
import React from "react";
import useStore from "src/hooks/useStore";

const DelaySlider = () => {
    const delay = useStore(state => ({
        state: state.delay,
        setState: state.setDelay
    }))

    return <div className="slider">
        <label>Delay before next frame: </label>
        <input
            type="range"
            min={0}
            max={1000}
            step={100}
            value={delay.state}
            onChange={e => delay.setState(e.target.value)}
        />
    </div>
}

export default DelaySlider;
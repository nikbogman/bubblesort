import React from "react";
import useStore from "../../../hooks/useStore";
import { collection } from "../../../lib/collection";

const SetupControls = () => {
    const [isRunning, reframe] = useStore(state => [
        state.isRunning,
        state.reframe,
    ])

    const collectionLength = useStore(state => ({
        state: state.collectionLength,
        setState: state.setCollectionLength,
    }))

    function handleChange() {
        if (isRunning) return;
        collection.reconstruct(collectionLength.state);
        return reframe();
    }

    React.useEffect(handleChange, [collectionLength.state])

    return <div className="CollectionControls">
        <div className="collectionLengthSlider">
            <label>Collection lenght: </label>
            <input
                disabled={isRunning}
                type="range"
                min="10"
                max="100"
                step={10}
                value={collectionLength.state}
                onChange={e => collectionLength.setState(e.target.value)}
            />
        </div>
        <button
            className="CollectionShuffleButton"
            onClick={handleChange}>Shuffle</button>
    </div>
}

export default SetupControls;
import React from "react";
import useStore from "src/hooks/useStore";
import { collection } from "src/lib/collection";
import { ImShuffle } from "react-icons/im";

const CollectionControls = () => {
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

    return <>
        <div className="slider">
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
            className="bordered"
            onClick={handleChange}><span style={{
                marginRight: '10px'
            }}><ImShuffle /></span>Shuffle</button >
    </>
}

export default CollectionControls;
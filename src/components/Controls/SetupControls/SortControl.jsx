import useStore from "../../../hooks/useStore";
import BubbleSort from "../../../lib/sorts/BubbleSort";

const SortControl = () => {
    const [collectionLength, setSort, isRunning, start] = useStore(state => [
        state.collectionLength,
        state.setSort,
        state.isRunning,
        state.start,
    ])

    return <>
        <button disabled={isRunning} onClick={() => {
            const bubble = new BubbleSort(collectionLength);
            setSort(bubble);
            start();
        }}>Bubble</button>
    </>
}

export default SortControl;
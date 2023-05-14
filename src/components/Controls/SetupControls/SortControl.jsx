import useStore from "hooks/useStore";
import BubbleSort from "lib/sorts/BubbleSort";
import { GiBubbles } from "react-icons/gi";

const SortControl = () => {
    const [collectionLength, setSort, isRunning, start] = useStore(state => [
        state.collectionLength,
        state.setSort,
        state.isRunning,
        state.start,
    ])

    return <>
        <button
            className="bordered"
            disabled={isRunning}
            onClick={() => {
                const bubble = new BubbleSort(collectionLength);
                setSort(bubble);
                start();
            }}>
            <span style={{
                marginRight: '10px'
            }}><GiBubbles /></span>Bubble</button>
    </>
}

export default SortControl;
import useStore from "../../hooks/useStore";
import { collection } from "../collection";
import Sort from "./Sort";

const reframe = () => useStore.getState().reframe();
const stop = () => useStore.getState().stop();

class BubbleSort extends Sort {
    constructor(length) { super(length); }

    async loop() {
        const { values, colors } = collection;
        if (this.unsortedCount === 0) {
            colors[this.idx] = "greenyellow";
            // get stop from runtime controls
            return stop();
        }
        if (this.idx < this.unsortedCount) {
            // color current
            colors[this.idx] = "red";
            if (values[this.idx] > values[this.idx + 1]) {
                collection.swapElementsAt(this.idx, this.idx + 1);
            }
            await reframe();

            colors[this.idx] = "white";
            // revert color of current back to default for the next execution
            this.idx += 1;
            return;
        }
        // color those that are sorted
        colors[this.idx] = "greenyellow";
        this.unsortedCount -= 1;
        this.idx = 0;
        return;
    }
}

export default BubbleSort;

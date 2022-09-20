import { array } from "../Array";

function swap(list, index1, index2) {
    const temp = list[index1];
    list[index1] = list[index2];
    list[index2] = temp;
    return list;
}

export default class BubbleSort {
    constructor(n) {
        this.i = 0;
        this.n = n;
    }

    async loop(pause, reframe) {
        const current = this.i;
        const next = this.i + 1;
        let { values, colors } = array;

        if (this.n == 1) {
            colors[current] = "greenyellow";
            return pause();
        }

        if (current < this.n - 1) {

            // color the current rectangle with red
            colors[current] = "red";

            if (values[current] > values[next]) {

                values = [...swap(values, current, next)];
                colors = [...swap(colors, next, current)];
                //await reframe()
            }

            await reframe();
            // color current back to black
            colors[current] = "black";
            this.i += 1;
            return;
        }

        colors[current] = "greenyellow";

        this.n -= 1;
        this.i = 0;
        return;
    }
}
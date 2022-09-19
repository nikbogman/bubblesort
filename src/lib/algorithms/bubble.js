import { array } from "../Array";

// implement Sort if ts
export default class BubbleSort {
    constructor(n) {
        this.i = 0;
        this.n = n;
    }

    loop(pause, reframe) {
        let i = this.i;
        if (this.n == 1) return pause();
        if (i < this.n - 1) {
            const arr = [...array.values];
            array.colors[i] = "red";
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                array.colors[i] = "black";
                array.colors[i + 1] = "red";
                array.values = [...arr];
            }
            array.colors[i - 1] = "black";
            this.i += 1;
            return reframe();
        }

        this.n -= 1;
        this.i = 0;
        return;
    }
}
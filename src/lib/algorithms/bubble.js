import { array } from "../Array";

// implement Sort if ts
export default class BubbleSort {
    constructor(n) {
        this.i = 0;
        this.n = n;
    }

    loop(pause, reframe) {
        let { i } = this;
        if (this.n == 1) return pause();
        if (i < this.n - 1) {
            let arr = [...array.values];
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                array.values = [...arr];
                reframe()
            }
            this.i += 1
            return;
        }
        this.n -= 1;
        this.i = 0;
        return;
    }
}
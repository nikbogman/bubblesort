import { array } from "../Array";

// implement Sort if ts
export default class BubbleSort {
    constructor(n) {
        this.i = 0;
        this.n = n;
    }

    async loop(pause, reframe) {
        let i = this.i;
        if (this.n == 1) {
            array.colors[i] = "greenyellow";
            return pause()
        };
        if (i < this.n - 1) {
            const arr = [...array.values];

            array.colors[i] = "red";
            //array.colors[i + 1] = "yellow";

            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                //array.colors[i] = "yellow";
                array.colors[i + 1] = "red";

                array.values = [...arr];
            }

            array.colors[i - 1] = "black";
            await reframe();
            array.colors[i] = "black"

            this.i += 1;
            return;
        }
        array.colors[i] = "greenyellow"

        this.n -= 1;
        this.i = 0;
        return;
    }
}
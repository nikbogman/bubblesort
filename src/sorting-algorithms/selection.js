import { stop, swap } from "../layout/utilities";
import { isArrayReset } from "../layout/ControlPanel";


export default async function selection(values, colors, size, ms) {
    let minIndex;
    for (let i = 0; i < size - 1; i++) {
        minIndex = i;
        colors[i] = 1;
        for (let j = i + 1; j < size; j++) {
            await stop();
            if (values[j] < values[minIndex])
                minIndex = j;
            colors[j] = 0;
        }
        if (isArrayReset) {
            colors.fill(0);
            return;
        }
        await swap(values, i, minIndex, ms);
        colors[i] = 2;
    }
    colors.fill(2);
    return values;
}

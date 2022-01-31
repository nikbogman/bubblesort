import { stop, swap } from "../layout/utilities";
import { isArrayReset } from "../layout/ControlPanel";


export default async function cocktail(values, colors, size, ms) {
    let swapped = true;
    let start = 0;
    let end = size - 1;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end; ++i) {
            colors[i] = 1;
            if (values[i] > values[i + 1]) {
                if (isArrayReset) {
                    colors.fill(0);
                    return;
                }
                await stop();
                await swap(values, i, i + 1, ms);
                swapped = true;
            }
            colors[i] = 0;
        }
        if (!swapped)
            break;
        swapped = false;
        colors[end] = 2;
        end -= 1;
        for (let i = end - 1; i >= start; --i) {
            colors[i] = 1;
            if (values[i] > values[i + 1]) {
                if (isArrayReset) {
                    colors.fill(0);
                    return;
                }
                await stop();
                await swap(values, i, i + 1, ms);
                swapped = true;
            }
            colors[i] = 0;
        }
        colors[start] = 2;
        start += 1;
    }
    colors.fill(2);

    return values;
}
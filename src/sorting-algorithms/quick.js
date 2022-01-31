import { swap, stop } from "../layout/utilities";
import { isArrayReset } from "../layout/ControlPanel";

export default async function quick(values, colors, size, ms) {
    await quickSort(values, 0, size - 1, ms, colors);
    if (isArrayReset) {
        return;
    }
    colors.fill(2);
}

async function partition(array, start, end, ms, colors) {
    for (let i = start; i < end; i++) {
        colors[i] = 0;
    }
    let pivotValue = array[end];
    let pivotIndex = start;
    colors[pivotIndex] = 1;
    for (let i = start; i < end; i++) {
        if (isArrayReset) {
            return;
        }
        if (array[i] < pivotValue) {
            await stop();
            await swap(array, i, pivotIndex, ms);
            pivotIndex++;
        }
    }
    await stop();
    await swap(array, pivotIndex, end, ms);
    for (let i = start; i < end; i++) {
        if (i !== pivotIndex) {
            colors[i] = 2;
        }
    }
    return pivotIndex;
}

async function quickSort(arr, start, end, ms, colors) {
    if (start >= end) {
        return;
    }
    if (isArrayReset) {
        return;
    }
    else {
        await stop();
        let index = await partition(arr, start, end, ms, colors);
        colors[index] = 2;
        await Promise.all([
            quickSort(arr, start, index - 1, ms, colors),
            quickSort(arr, index + 1, end, ms, colors)
        ]);
    }
}
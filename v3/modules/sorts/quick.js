import * as utils from '../utils.js';
import { array as o  } from '../../variables.js';

async function partition(arr, start, end) {
    for (let i = start; i < end; i++) {
        o.states[i] = 2;
    }
    let pivotValue = arr[end];
    let pivotIndex = start;
    o.states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await utils.swap(arr, i, pivotIndex);
            o.states[pivotIndex] = 0;
            pivotIndex++;
            o.states[pivotIndex] = 1;
        }
    }
    await utils.swap(arr, pivotIndex, end);
    for (let i = start; i < end; i++) {
        if (i != pivotIndex) {
            o.states[i] = 0;
        }
    }
    return pivotIndex;
}
export async function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = await partition(arr, start, end);
    o.states[index] = 0;

    await Promise.all([
        quickSort(arr, start, index - 1),
        quickSort(arr, index + 1, end)
    ]);
}
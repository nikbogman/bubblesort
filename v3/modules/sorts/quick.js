import * as utils from '../utils.js';
import { array } from '../../variables.js';

async function partition(arr, start, end) {
    for (let i = start; i < end; i++) {
        array.states[i] = 2;
    }
    let pivotValue = arr[end];
    let pivotIndex = start;
    array.states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await utils.swap(arr, i, pivotIndex);
            array.states[pivotIndex] = 0;
            pivotIndex++;
            array.states[pivotIndex] = 1;
        }
    }
    await utils.swap(arr, pivotIndex, end);
    for (let i = start; i < end; i++) {
        if (i != pivotIndex) {
            array.states[i] = 0;
        }
    }
    return pivotIndex;
}

export default async function (vals, start, end) {
    if (start >= end) {
        return;
    }
    let index = await partition(vals, start, end);
    vals.states[index] = 0;
    await Promise.all([
        quickSort(vals, start, index - 1),
        quickSort(vals, index + 1, end)
    ]);
}    

import * as util from '../utils.js';
import { array } from '../../variables.js';

const findMax = (arr, k) => {
    let max = -Infinity;
    let maxIdx = 0;
    for (let i = 0; i < k; i++) {
        if (arr[i] >= max) {
            max = arr[i];
            maxIdx = i;
        }
    }
    return maxIdx;
}

const flip = async (arr, k) => {
    let i = 0;
    while (i < k) {
        await util.swap(arr, k, i);
        i++;
        k--;
    }
    return arr;
}

export default async function (vals) {
    let n = array.size;
    while (n > 1) {
        array.states[n] = 2;
        let maxIndex = findMax(vals, n);
        if (maxIndex !== n - 1) {
            await flip(vals, maxIndex);
            await flip(vals, n - 1);
        }
        n--;
    }
    array.states = 0;
    return vals;
}
import * as util from '../utils.js';
import { o } from '../../main.js';

let findMax = (arr, k) => {
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

let flip = async (arr, k) => {
    let i = 0;
    while (i < k) {
        await util.swap(arr, k, i);
        i++;
        k--;
    }
    return arr;
}

export default async function (array) {

    let n = o.size;
    while (n > 1) {
        o.states[n] = 2;
        let maxIndex = findMax(array, n);
        if (maxIndex !== n - 1) {
            await flip(array, maxIndex);
            await flip(array, n - 1);
        }
        n--;
    }
    o.states = 0;

    return array;

}
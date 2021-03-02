import * as util from '../utils.js';
import {a} from '../../main.js';

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
    if (!a.active) {
        a.active = true;
        let n = array.length;
        while (n > 1) {
            let maxIndex = findMax(array, n);
            if (maxIndex !== n - 1) {
                await flip(array, maxIndex);
                await flip(array, n - 1);
            }
            n--;
        }
        a.active = false;
        return array;
    }
    else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}
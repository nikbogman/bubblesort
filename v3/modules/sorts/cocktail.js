import * as util from '../utils.js';
import { o } from '../../main.js';

export default async function (array) {
    let swapped = true;
    let start = 0;
    let end = o.size - 1;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end; ++i) {
            o.states[i] = 1;
            if (array[i] > array[i + 1]) {
                await util.swap(array, i, i + 1);
                swapped = true;
            }
            o.states[i] = 0;
        }
        if (!swapped)
            break;
        swapped = false;
        end -= 1;
        for (let i = end - 1; i >= start; --i) {
            o.states[i] = 1;
            if (array[i] > array[i + 1]) {
                await util.swap(array, i, i + 1);
                swapped = true;
            }
            o.states[i] = 0;
        }
        start += 1;
    }
    return array;
}
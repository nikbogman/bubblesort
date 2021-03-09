import * as util from '../utils.js';
import { array } from '../../variables.js';

export default async function (vals) {
    let swapped = true;
    let start = 0;
    let end = array.size - 1;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end; ++i) {
            array.states[i] = 1;
            if (vals[i] > vals[i + 1]) {
                await util.swap(vals, i, i + 1);
                swapped = true;
            }
            array.states[i] = 0;
        }
        if (!swapped)
            break;
        swapped = false;
        end -= 1;
        for (let i = end - 1; i >= start; --i) {
            array.states[i] = 1;
            if (vals[i] > vals[i + 1]) {
                await util.swap(vals, i, i + 1);
                swapped = true;
            }
            array.states[i] = 0;
        }
        start += 1;
    }
    return vals;
}
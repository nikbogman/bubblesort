import * as util from '../utils.js';
import { a } from '../../main.js';

export default async function (array) {
    if (!a.active) {
        a.active = true;
        let swapped = true;
        let start = 0;
        let end = array.length - 1;
        while (swapped) {
            swapped = false;
            for (let i = start; i < end; ++i) {
                if (array[i] > array[i + 1]) {
                    await util.swap(array, i, i + 1);
                    swapped = true;
                }
            }
            if (!swapped)
                break;
            swapped = false;
            end -= 1;
            for (let i = end - 1; i >= start; --i) {
                if (array[i] > array[i + 1]) {
                    await util.swap(array, i, i + 1);
                    swapped = true;
                }
            }
            start += 1;
        }
        a.active = false;
        return array;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}
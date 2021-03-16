import * as util from '../utilities.js';
import { arrayStruct as a} from '../../variables.js';

export default async function (numbers) {
    let swapped = true;
    let start = 0;
    let end = a.size - 1;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end; ++i) {
            a.states[i] = 1;
            if (numbers[i] > numbers[i + 1]) {
                await util.swap(numbers, i, i + 1);
                swapped = true;
            }
            a.states[i] = 0;
        }
        if (!swapped)
            break;
        swapped = false;
        end -= 1;
        for (let i = end - 1; i >= start; --i) {
            a.states[i] = 1;
            if (numbers[i] > numbers[i + 1]) {
                await util.swap(numbers, i, i + 1);
                swapped = true;
            }
            a.states[i] = 0;
        }
        start += 1;
    }
    return numbers;
}
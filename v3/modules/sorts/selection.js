import * as util from '../utils.js';
import { o } from '../../main.js';

export default async function (array) {
    let minIdx;
    for (let i = 0; i < o.size - 1; i++) {
        minIdx = i;
        o.states[i] = 1;
        for (let j = i + 1; j < o.size; j++) {
            await util.stop();
            if (array[j] < array[minIdx])
                minIdx = j;
            o.states[j] = 0;
        }
        await util.swap(array, i, minIdx);
        o.states[i] = 2;
    }
    o.states = 0;
    return array;
}

import * as util from '../utils.js';
import { array } from '../../variables.js';

export default async function (vals) {
    let minIdx;
    for (let i = 0; i < array.size - 1; i++) {
        minIdx = i;
        array.states[i] = 1;
        for (let j = i + 1; j < array.size; j++) {
            await util.stop();
            if (vals[j] < vals[minIdx])
                minIdx = j;
            array.states[j] = 0;
        }
        await util.swap(vals, i, minIdx);
        array.states[i] = 2;
    }
    array.states = 0;
    return vals;
}

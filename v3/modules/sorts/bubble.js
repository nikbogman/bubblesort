import * as util from '../utils.js';
import { array } from '../../variables.js';

export default async function (vals) {
    for (let i = 0; i < array.size; i++) {
        for (let j = 0; j < array.size - 1 - i; j++) {
            array.states[j] = 1;
            await util.stop();
            if (vals[j] > vals[j + 1])
                await util.swap(vals, j, j + 1);
            array.states[j] = 0;
            array.states[j + 1] = 2;
        }
    }
    return vals;
}


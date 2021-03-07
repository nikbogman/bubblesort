import * as util from '../utils.js';
import { o } from '../../main.js';

export default async function (array) {
    for (let i = 0; i < o.size; i++) {
        for (let j = 0; j < o.size - 1 - i; j++) {
            o.states[j] = 1;
            await util.stop();
            if (array[j] > array[j + 1])
                await util.swap(array, j, j + 1);
            o.states[j] = 0;
            o.states[j + 1] = 2;
        }
    }
    return array;
}


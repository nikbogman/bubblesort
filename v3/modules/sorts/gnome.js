import * as util from '../utils.js';
import { o } from '../../main.js';

export default async function (array) {

    let n = o.size;
    let i = 0;
    while (i < n) {
        //o.states[i] = 0;
        if (i == 0)
            i++;
        if (array[i] >= array[i - 1]) {
            i++;
        }
        else {
            o.states[i] = 1;
            await util.stop();
            await util.swap(array, i, i - 1);
            o.states[i] = 2;
            i--;
        }
    }
    o.states = 0;
    return array;

}

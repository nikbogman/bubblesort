import * as util from '../utils.js';
import { array } from '../../variables.js';

export default async function (vals) {
    let n = array.size;
    let i = 0;
    while (i < n) {
        if (i == 0)
            i++;
        if (vals[i] >= vals[i - 1]) {
            i++;
        }
        else {
            array.states[i] = 1;
            await util.stop();
            await util.swap(vals, i, i - 1);
            array.states[i] = 2;
            i--;
        }
    }
    array.states = 0;
    return vals;
}

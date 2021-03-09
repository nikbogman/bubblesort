import * as util from '../utils.js';
import { array } from '../../variables.js';

export default async function (vals) {
    for (let i = 1; i < array.size; i++) {
        let current = vals[i];
        array.states[i] = 1;
        let j = i - 1;
        await util.stop();
        while ((j > -1) && (current < vals[j])) {
            vals[j + 1] = vals[j];
            j--;
        }
        await util.sleep(0);
        vals[j + 1] = current;
        array.states[i] = 2;
    }
    array.states = 0;
    return vals;
}
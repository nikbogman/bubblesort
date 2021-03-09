import * as util from '../utils.js';
import { array } from '../../variables.js';

export default async function (vals) {
    let n = array.size;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = vals[i];
            await util.stop();
            let j;
            for (j = i; j >= gap && vals[j - gap] > temp; j -= gap) {
                vals[j] = vals[j - gap];
            }
            await util.sleep(0);
            vals[j] = temp;
        }
    }
    return vals;
}
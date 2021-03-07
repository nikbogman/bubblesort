import * as util from '../utils.js';
import { o } from '../../main.js';

export default async function (array) {

    let n = o.size;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = array[i];
            await util.stop();
            let j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }
            await util.sleep(0);
            array[j] = temp;
        }
    }

    return array;

}
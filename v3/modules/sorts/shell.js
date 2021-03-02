import * as util from '../utils.js';
import {a} from '../../main.js';

export default async function (array) {
    if (!a.active) {
        a.active = true;
        let n = array.length;
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
        a.active = false;
        return array;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}
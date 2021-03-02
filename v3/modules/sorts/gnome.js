import * as util from '../utils.js';
import {a} from '../../main.js';
 
export default async function (array) {
    if (!a.active) {
        a.active = true;
        let n = array.length;
        let i = 0;
        while (i < n) {
            if (i == 0)
                i++;
            if (array[i] >= array[i - 1])
                i++;
            else {
                await util.stop();
                await til.swap(array, i, i - 1);
                i--;
            }
        }
        a.active = false;
        return array;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

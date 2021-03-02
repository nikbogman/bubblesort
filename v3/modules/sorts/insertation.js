import * as util from '../utils.js';
import {a} from '../../main.js';

export default async function (array) {
    if (!a.active) {
        a.active = true;
        for (let i = 1; i < array.length; i++) {
            let current = array[i];
            a.states[i] = 1;
            let j = i - 1;
            await util.stop();
            while ((j > -1) && (current < array[j])) {
                array[j + 1] = array[j];
                j--;
            }
            await util.sleep(0);
            array[j + 1] = current;
            a.states[i] = 2;
        }
        a.states = 0;
        a.active = false;
        return array;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}
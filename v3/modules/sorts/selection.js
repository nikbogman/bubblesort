import * as util from '../utils.js';
import {a} from '../../main.js';

export default async function (array) {
    if (!a.active) {
        a.active = true;
        let minIdx;
        for (let i = 0; i < array.length - 1; i++) {
            minIdx = i;
            a.states[i] = 1;
            for (let j = i + 1; j < array.length; j++) {
                await util.stop();
                if (array[j] < array[minIdx])
                    minIdx = j;
                a.states[j] = 0;
            }
            await util.swap(array, i, minIdx);
            a.states[i] = 2;
        }
        a.states = 0;
        a.active = false;
        return array;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

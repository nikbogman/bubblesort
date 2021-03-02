import * as util from '../utils.js';
import {a} from '../../main.js';

export default async function (array) {
    if (!a.active) {
        a.active = true;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                a.states[j] = 1;
                await util.stop();
                if (array[j] > array[j + 1])
                    await util.swap(array, j, j + 1);
                a.states[j] = 0;
            }
        }
        a.active = false;
        return array;
    }
    else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}
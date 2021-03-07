import * as util from '../utils.js';
import { o } from '../../main.js';

export default async function (array) {

    for (let i = 1; i < o.size; i++) {
        let current = array[i];
        o.states[i] = 1;
        let j = i - 1;
        await util.stop();
        while ((j > -1) && (current < array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        await util.sleep(0);
        array[j + 1] = current;
        o.states[i] = 2;
    }
    o.states = 0;

    return array;

}
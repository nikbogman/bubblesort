import * as util from '../utilities.js';
import { arrayStruct as a} from '../../variables.js';


export default async function gnome(numbers) {
    let n = a.size;
    let i = 0;
    while (i < n) {
        if (i == 0)
            i++;
        if (numbers[i] >= numbers[i - 1]) {
            i++;
        }
        else {
            a.states[i] = 1;
            await util.freeze();
            await util.swap(numbers, i, i - 1);
            a.states[i] = 2;
            i--;
        }
    }
    a.states = 0;
    return numbers;
}

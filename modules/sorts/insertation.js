import * as util from '../utilities.js';
import { arrayStruct as a} from '../../variables.js';


export default async function insertation(numbers) {
    for (let i = 1; i < a.size; i++) {
        let current = numbers[i];
        a.states[i] = 1;
        let j = i - 1;
        await util.freeze();
        while ((j > -1) && (current < numbers[j])) {
            numbers[j + 1] = numbers[j];
            j--;
        }
        await util.sleep(0);
        numbers[j + 1] = current;
        a.states[i] = 2;
    }
    a.states = 0;
    return numbers;
}
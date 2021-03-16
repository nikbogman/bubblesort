import * as util from '../utilities.js';
import { arrayStruct as a} from '../../variables.js';

export default async function (numbers) {
    for (let i = 0; i < a.size; i++) {
        for (let j = 0; j < a.size - 1 - i; j++) {
            a.states[j] = 1;
            await util.freeze();
            if (numbers[j] > numbers[j + 1])
                await util.swap(numbers, j, j + 1);
            a.states[j] = 0;
            a.states[j + 1] = 2;
        }
    }
    return numbers;
}


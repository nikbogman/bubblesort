import * as util from '../utilities.js';
import { arrayStruct as a} from '../../variables.js';

export default async function (numbers) {
    let minIndex;
    for (let i = 0; i < a.size - 1; i++) {
        minIndex = i;
        a.states[i] = 1;
        for (let j = i + 1; j < a.size; j++) {
            await util.freeze();
            if (numbers[j] < numbers[minIndex])
                minIndex = j;
            a.states[j] = 0;
        }
        await util.swap(numbers, i, minIndex);
        a.states[i] = 2;
    }
    a.states = 0;
    return numbers;
}

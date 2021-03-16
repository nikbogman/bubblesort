import * as util from '../utilities.js';
import { arrayStruct as a } from '../../variables.js';

export default async function (numbers) {
    let n = a.size;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = numbers[i];
            await util.freeze();
            let j;
            for (j = i; j >= gap && numbers[j - gap] > temp; j -= gap) {
                numbers[j] = numbers[j - gap];
            }
            await util.sleep(0);
            numbers[j] = temp;
        }
    }
    return numbers;
}
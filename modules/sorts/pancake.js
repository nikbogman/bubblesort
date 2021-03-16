import * as util from '../utilities.js';
import { arrayStruct as a} from '../../variables.js';

const findMax = (nums, k) => {
    let max = -Infinity;
    let maxIndex = 0;
    for (let i = 0; i < k; i++) {
        if (nums[i] >= max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

const flip = async (nums, k) => {
    let i = 0;
    while (i < k) {
        await util.swap(nums, k, i);
        i++;
        k--;
    }
    return nums;
}

export default async function (numbers) {
    let n = a.size;
    while (n > 1) {
        a.states[n] = 2;
        let maxIndex = findMax(numbers, n);
        if (maxIndex !== n - 1) {
            await flip(numbers, maxIndex);
            await flip(numbers, n - 1);
        }
        n--;
    }
    a.states = 0;
    return numbers;
}
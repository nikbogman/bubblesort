import { stop, swap } from "../components/utilities";
import { isArrayReset } from "../components/menu";


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

const flip = async (nums, k, ms) => {
    let i = 0;
    while (i < k) {
        await stop();
        await swap(nums, k, i, ms);
        i++;
        k--;
    }
    return nums;
}

export default async function pancake(values,colors, size, ms) {
    let n = size;
    while (n > 1) {
        if (isArrayReset)
        {
            colors.fill(0);
            return;
        }
        colors[n] = 2;
        let maxIndex = findMax(values, n);
        if (maxIndex !== n - 1) {
            await flip(values, maxIndex, ms);
            await flip(values, n - 1, ms);
        }
        n--;
    }
    colors.fill(2);
    return values;
}
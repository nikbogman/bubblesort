import { stop, sleep } from "../components/utilities";
import { isArrayReset } from "../components/menu";


export default async function shell(values,colors, size, ms) {
    let n = size;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = values[i];
            await stop();
            let j;
            for (j = i; j >= gap && values[j - gap] > temp; j -= gap) {
                values[j] = values[j - gap];
            }
            if (isArrayReset)
            {
                colors.fill(0);
                return;
            }
            await sleep(ms);
            values[j] = temp;
        }
    }
    colors.fill(2);
    return values;
}
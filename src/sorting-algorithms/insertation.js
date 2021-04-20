import { sleep, stop } from "../components/utilities";
import { isArrayReset } from "../components/menu";



export default async function insertation(values,colors, size, ms) {
    for (let i = 1; i < size; i++) {
        let current = values[i];
        colors[i] = 1;
        let j = i - 1;
        if (isArrayReset)
        {
            colors.fill(0);
            return;
        }
        await stop();
        while ((j > -1) && (current < values[j])) {
            values[j + 1] = values[j];
            j--;
        }
        await sleep(ms);
        values[j + 1] = current;
        colors[i] = 2;
    }
    colors.fill(2);

    return values;
}
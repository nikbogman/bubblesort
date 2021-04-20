import { stop, swap } from "../components/utilities";
import { isArrayReset } from "../components/menu";

export default async function bubble(values, colors, size, ms) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - 1 - i; j++) {
            if (isArrayReset)
            {
                colors.fill(0);
                return;
            }
            colors[j] = 1;
            await stop();
            if (values[j] > values[j + 1]) {
                await swap(values, j, j + 1, ms);
            }
            colors[j + 1] = 2;
            colors[j] = 0;
        }
    }
    colors.fill(2);
    return values;
}

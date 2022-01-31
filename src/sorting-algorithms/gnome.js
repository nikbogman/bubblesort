import { stop, swap } from "../layout/utilities";
import { isArrayReset } from "../layout/ControlPanel";


export default async function gnome(values, colors, size, ms) {
    let n = size;
    let i = 0;
    while (i < n) {
        if (i === 0)
            i++;
        if (values[i] >= values[i - 1]) {
            i++;
        }
        else {
            colors[i] = 1;
            await stop();
            await swap(values, i, i - 1, ms);
            colors[i] = 2;
            i--;
        }
        if (isArrayReset) {
            colors.fill(0);
            return;
        }

    }
    colors.fill(2);

    return values;
}

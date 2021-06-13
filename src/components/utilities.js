import { isSortingPaused } from './menu';

const {
    REACT_APP_CANVAS_HEIGHT
} = process.env;

export function init(array, colors, size) {
    for (let i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (REACT_APP_CANVAS_HEIGHT - 100 + 1)) + 100;
        colors[i] = 0;
    }
}

export async function swap(array, index1, index2, ms) {
    await sleep(ms);
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function stop() {
    while (isSortingPaused)
        await sleep(0);
}

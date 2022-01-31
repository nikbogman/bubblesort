import global from "./common";

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
    while (global.isSortingPaused)
        await sleep(0);
}

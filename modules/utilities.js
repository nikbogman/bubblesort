import { arrayStruct as a, flags as f } from '../variables.js';

export function init() {
    a.values = new Array(a.size);
    a.states = new Array(a.size);
    for (let i = 0; i < a.size; i++) {
        a.values[i] = random(height);
        a.states[i] = 0;
    }
    f.sorted = false;
}

export async function freeze() {
    while (f.pause) {
        await sleep(0);
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


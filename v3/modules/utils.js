import { array,flags as f} from '../variables.js';

export function initArray() {
    array.values = new Array(array.size);
    array.states = new Array(array.size);
    for (let i = 0; i < array.size; i++) {
        array.values[i] = random(height);
        array.states[i] = 0;
    }
    array.sorted$ = false;
}

export async function stop() {
    while (f.pause) {
        await sleep(0);
    }
}

export async function swap(array, a, b, ms) {
    await sleep(ms);
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const green = '#4ce600';
const red = '#FF4500';

export function rectangulars(height, shapeWidth) {
    for (let i = 0; i < array.size; i++) {
        noStroke();
        if (array.states[i] == 1) {
            fill(red);
        } else if (array.states[i] == 2) {
            fill(green);
        } else {
            fill(255);
        }
        rect(i * shapeWidth, height - array.values[i], shapeWidth, array.values[i]);
    }
}



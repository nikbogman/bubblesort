import { o } from '../main.js';

export function initArray() {
    o.values = new Array(o.size);
    o.states = new Array(o.size);
    for (let i = 0; i < o.size; i++) {
        o.values[i] = random(height);
        o.states[i] = 0;
    }
    o.sorted$ = false;
}

export async function stop() {
    while (o.pause$) {
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
    for (let i = 0; i < o.size; i++) {
        noStroke();
        if (o.states[i] == 1) {
            fill(red);
        } else if (o.states[i] == 2) {
            fill(green);
        } else {
            fill(255);
        }
        rect(i * shapeWidth, height - o.values[i], shapeWidth, o.values[i]);
    }
}



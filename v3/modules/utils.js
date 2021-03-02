import { a, shapeWidth } from '../main.js';

export function initArray() {
    if (!a.active) {
        a.active = true;
        a.values = new Array(floor(width / shapeWidth));
        a.states = new Array(floor(width / shapeWidth));
        for (let i = 0; i < a.values.length; i++) {
            a.values[i] = random(height);
            a.states[i] = 0;
        }
        a.active = false;
    } else {
        alert("You cannot reset the array while sorting..");
    }
}

export function pause() {
    if (a.pauseFlag)
        a.pauseFlag = false;
    else
        a.pauseFlag = true;
}

export async function stop() {
    while (a.pauseFlag) {
        await sleep(0);
    }
}

export async function swap(array, a, b, ms) {
    await sleep(ms);
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function rectangulars(height) {
    for (let i = 0; i < a.values.length; i++) {
        noStroke();
        if (a.states[i] == 1) {
            fill('#FF4500');
        } else if (a.states[i] == 2) {
            fill('#4ce600')
        } else {
            fill(255);
        }
        rect(i * shapeWidth, height - a.values[i], shapeWidth, a.values[i]);
    }
}


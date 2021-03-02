let values = [];
let states = [];

const shapeWidth = 30;
const ms = 1;
var active = false;
var pauseFlag = false;

function setup() {
    var canvas = createCanvas(windowWidth, 720);//(windowWidth/2,windowHeight/2);//(1280, 720);
    canvas.parent('canvasForHTML');
    arrayInit();
}

function arrayInit() {
    if (!active) {
        values = new Array(floor(width / shapeWidth));
        states = new Array(floor(width / shapeWidth));
        for (let i = 0; i < values.length; i++) {
            values[i] = random(height);
            states[i] = 0;
        }
    }
}

pause = () => {
    if (pauseFlag)
        pauseFlag = false;
    else
        pauseFlag = true;
}

stop = async () => {
    while (pauseFlag) {
        await sleep(0);
    }
}

//sorting algorithms
async function bubbleSort(arr) {
    if (!active) {
        active = true;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                states[j] = 1;
                await stop();
                if (arr[j] > arr[j + 1])
                    await swap(arr, j, j + 1);
                states[j] = 0;
            }
        }
        active = false;
        return arr;
    }
    else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

async function selectionSort(arr) {
    if (!active) {
        active = true;
        let minIdx;
        for (let i = 0; i < arr.length - 1; i++) {
            minIdx = i;
            states[i] = 1;
            for (let j = i + 1; j < arr.length; j++) {
                await stop();
                if (arr[j] < arr[minIdx])
                    minIdx = j;
                states[j] = 0;
            }
            await swap(arr, i, minIdx);
            states[i] = 2;
        }
        states = 0;
        active = false;
        return arr;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

async function insertationSort(arr) {
    if (!active) {
        active = true;
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            states[i] = 1;
            let j = i - 1;
            await stop();
            while ((j > -1) && (current < arr[j])) {
                arr[j + 1] = arr[j];
                j--;
            }
            await sleep(0);
            arr[j + 1] = current;
            states[i] = 2;
        }
        states = 0;
        active = false;
        return arr;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

async function shellSort(arr) {
    if (!active) {
        active = true;
        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i += 1) {
                let temp = arr[i];
                await stop();
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                await sleep(0);
                arr[j] = temp;
            }
        }
        active = false;
        return arr;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

async function gnomeSort(arr) {
    if (!active) {
        active = true;
        let n = arr.length;
        let i = 0;
        while (i < n) {
            if (i == 0)
                i++;
            if (arr[i] >= arr[i - 1])
                i++;
            else {
                await stop();
                await swap(arr, i, i - 1);
                i--;
            }
        }
        active = false;
        return arr;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

async function cocktailSort(arr) {
    if (!active) {
        active = true;
        let swapped = true;
        let start = 0;
        let end = arr.length - 1;
        while (swapped) {
            swapped = false;
            for (let i = start; i < end; ++i) {
                if (arr[i] > arr[i + 1]) {
                    await swap(arr, i, i + 1);
                    swapped = true;
                }
            }
            if (!swapped)
                break;
            swapped = false;
            end -= 1;
            for (let i = end - 1; i >= start; --i) {
                if (arr[i] > arr[i + 1]) {
                    await swap(arr, i, i + 1);
                    swapped = true;
                }
            }
            start += 1;
        }
        active = false;
        return arr;
    } else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

async function pancakeSort(arr) {
    if (!active) {
        active = true;
        let n = arr.length;

        let findMax = (arr, k) => {
            let max = -Infinity;
            let maxIdx = 0;
            for (let i = 0; i < k; i++) {
                if (arr[i] >= max) {
                    max = arr[i];
                    maxIdx = i;
                }
            }
            return maxIdx;
        }

        let flip = async (arr, k) => {
            let i = 0;
            while (i < k) {
                await swap(arr, k, i);
                i++;
                k--;
            }
            return arr;
        }

        while (n > 1) {
            let maxIndex = findMax(arr, n);
            if (maxIndex !== n - 1) {
                await flip(arr, maxIndex);
                await flip(arr, n - 1);
            }
            n--;
        }
        active = false;
        return arr;
    }
    else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

rectangulars = () => {
    for (let i = 0; i < values.length; i++) {
        noStroke();
        if (states[i] == 1) {
            fill('#FF4500');
        } else if (states[i] == 2) {
            fill('#4ce600')
        } else {
            fill(255);
        }
        rect(i * shapeWidth, height - values[i], shapeWidth, values[i]);
    }
}

points = () => {
    for (let i = 0; i < values.length; i++) {
        strokeWeight(shapeWidth);
        if (states[i] == 1) {
            stroke('#FF4500');
        } else if (states[i] == 2) {
            stroke('#4ce600')
        } else {
            stroke(255);
        }
        point(shapeWidth * i, height - values[i]);
    }
}

function draw() {
    background(0);
    //points();
    rectangulars();
}

async function swap(arr, a, b, ms) {
    await sleep(ms);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

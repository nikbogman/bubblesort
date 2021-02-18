let values = [];
let states = [];

let w = 5;
var active = false; //is sorting in action

function setup() {
    var canvas = createCanvas(windowWidth, 720);//(windowWidth/2,windowHeight/2);//(1280, 720);
    canvas.parent('canvasForHTML');
    array_init();
}


function array_init() {
    if (!active) {
        values = new Array(floor(width / w));
        states = new Array(floor(width / w));
        for (let i = 0; i < values.length; i++) {
            values[i] = random(height);
            states[i] = 0;
        }
    }
}



async function bubbleSort(array) {
    if (!active) {
        active = true;

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                states[j] = 1;
                if (array[j] > array[j + 1])
                    await swap(array, j, j + 1, 5);
                states[j] = 0;
            }
        }
        active = false;

        return array;
    }
    else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}

async function selectionSort(array) {
    if (!active) {
        active = true;
        let min_index;
        for (let i = 0; i < array.length - 1; i++) {
            min_index = i;
            states[i] = 1;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[min_index])
                    min_index = j;
                states[j] = 0;
            }
            await swap(array, i, min_index, 15);
            states[i] = 2;
        }
        states = 0;
        active = false;
        return array;
    }
    else {
        alert("You cannot see multiple selections at once.\nFirst you need to restart..");
    }
}


async function insertationSort(array) {
    let n = array.length;

    for (let i = 1; i < n; i++) {
        let current = array[i];
        let foo = async current => {
            let j = i - 1;
            while ((j > -1) && (current < array[j])) {

                array[j + 1] = array[j];
                j--;
            }
            await sleep(5);
            array[j + 1] = current;
        }
        await foo(current);
    }

    return array;
}

async function shellSort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];
            let foo = async (temp, gap) => {
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                await sleep(0);
                arr[j] = temp;
            }
            await foo(temp, gap);
        }
    }
    return arr;
}

async function gnomeSort(arr) {
    let n = arr.length;
    let i = 0;
    while (i < n) {
        if (i == 0)
            i++;
        if (arr[i] >= arr[i - 1])
            i++;
        else {
            await swap(arr, i, i - 1);
            i--;
        }
    }

    return arr;
}

async function cocktailSort(arr)
{
    let n = arr.length;
    let swapped = true;
    let start = 0;
    let end = n - 1;
 
    while (swapped) 
    {
        swapped = false;

        for (let i = start; i < end; ++i) 
        {
            if (arr[i] > arr[i + 1]) {
                await swap(arr,i,i+1);
                swapped = true;
            }
        }

        if (!swapped)
            break;
 
        swapped = false;
 
        end-=1;
 
        for (let i = end - 1; i >= start; --i) 
        {
            if (arr[i] > arr[i + 1]) {
                await swap(arr,i,i+1);
                swapped = true;
            }
        }
        start+=1;
    }
    return arr;
}
function rectangulars() {
    for (let i = 0; i < values.length; i++) {
        noStroke();
        if (states[i] == 1) {
            fill('#FF4500');
        } else if (states[i] == 2) {
            fill('#4ce600')
        } else {
            fill(255);
        }
        rect(i * w, height - values[i], w, values[i]);
    }
}

function points() {
    for (let i = 0; i < values.length; i++) {
        strokeWeight(w);
        if (states[i] == 1) {
            stroke('#FF4500');
        } else if (states[i] == 2) {
            stroke('#4ce600')
        } else {
            stroke(255);
        }
        point(w * i, height - values[i]);
    }
}


function draw() {
    background(0);
    points();
    //rectangulars();
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


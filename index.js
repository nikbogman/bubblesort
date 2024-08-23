const shuffleButton = document.getElementById("shuffle-btn");
const playButton = document.getElementById("play-btn");
const lengthSliderInput = document.getElementById("length-slider-input");
const timeoutSliderInput = document.getElementById(
    "timeout-slider-input"
);

function updateSliderValue(slider, value) {
    slider.value = value; // Update the slider value
    const label = slider.previousElementSibling;
    label.textContent = `${label.dataset.label}: ${value}`; // Update the label text
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = (window.innerHeight / 3) * 2;

const array = new Array();
let n = 0;

function setup(length) {
    array.length = length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width / array.length;

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 100) + 1;

        ctx.fillStyle = "black";
        ctx.fillRect(i * width, 0, width, array[i] * 5);
    }

    n = length;

    console.log(array);
}

window.onload = () => {
    const timeout = 0;
    updateSliderValue(timeoutSliderInput, timeout);

    const length = 50;
    updateSliderValue(lengthSliderInput, length);
    setup(length);
};

shuffleButton.addEventListener("click", () => {
    setup(array.length);
    lengthSliderInput.disabled = false;
    playButton.disabled = false;
});
lengthSliderInput.addEventListener("input", function (event) {
    const length = event.target.value;
    updateSliderValue(this, length);
    setup(length);
});

let isSorting = false;
let idx = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width / array.length;

    for (let i = 0; i < array.length; i++) {
        if (i >= n) {
            // Color bars that are sorted
            ctx.fillStyle = "limegreen";
        } else if (i === idx) {
            // Color the current bar being processed
            ctx.fillStyle = isSorting ? "red" : "limegreen";
        } else {
            // Color other bars
            ctx.fillStyle = "black";
        }

        ctx.fillRect(i * width, 0, width, array[i] * 5);
    }
}

let swapped = false;
function bubbleSort() {
    if (n === 1 && !swapped) {
        isSorting = false;

        playButton.innerText = "Play";
        playButton.disabled = true;

        shuffleButton.disabled = false;
        lengthSliderInput.disabled = false;

        clearInterval(intervalId);
        intervalId = null;

        console.log(array);

        return draw(); // Sorting is complete
    }

    swapped = false;

    if (idx === n - 1) {
        idx = 0;
        n -= 1;
        return draw(); // Continue sorting
    }

    if (array[idx] > array[idx + 1]) {
        let temp = array[idx];
        array[idx] = array[idx + 1];
        array[idx + 1] = temp;

        swapped = true;
    }

    idx += 1;
    return draw(); // Continue sorting
}

let intervalId = null;
let timeout = 0;

timeoutSliderInput.addEventListener("input", function (event) {
    timeout = event.target.value;
    updateSliderValue(this, event.target.value);

    if (isSorting) {
        clearInterval(intervalId);
        intervalId = setInterval(bubbleSort, timeout);
    }
});

playButton.addEventListener("click", function () {
    if (isSorting) {
        this.innerText = "Play";

        shuffleButton.disabled = false;

        clearInterval(intervalId);
        intervalId = null;

        isSorting = false;
    } else {
        this.innerText = "Pause";

        shuffleButton.disabled = true;
        lengthSliderInput.disabled = true;

        intervalId = setInterval(bubbleSort, timeout);

        isSorting = true;
    }
});
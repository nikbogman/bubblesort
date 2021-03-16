import { arrayStruct as a } from './variables.js';
import { init } from './modules/utilities.js';
import buttonSet from './modules/buttonSet.js';

const shapeWidth = 50;                                                      //the width of the shape
const ms = 0;                                                               //delay in miliseconds

window.setup = () => {
    const canvas = createCanvas(windowWidth, windowHeight/1.5).parent('canvasHTML');
    a.size = floor(width / shapeWidth);
    console.log(a.size);
    init();                                                                 //initializing the arrayStruct
    buttonSet();
}

const GREEN = '#4ce600';
const RED = '#FF4500';
const WHITE = 255;
const BLACK = 0;

function drawRectangulars() {
    for (let i = 0; i < a.size; i++) {
        noStroke();
        if (a.states[i] == 0) {
            fill(WHITE);
        } else if (a.states[i] == 1) {
            fill(RED);
        } else if (a.states[i] == 2) {
            fill(GREEN);
        }
        rect(i * shapeWidth, height - a.values[i], shapeWidth, a.values[i]);
    }
}

window.draw = () => {
    background(BLACK);
    drawRectangulars();
}

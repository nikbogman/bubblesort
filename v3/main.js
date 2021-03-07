export var o = {
    size: 0,
    values: [],
    states: [],
    //flags
    sorted$: false,
    active$: false,
    pause$: false
}
const ms = 0;
const shapeWidth = 20;

import * as util from './modules/utils.js';
import buttons from './modules/buttons.js';
function setup() {
    var canvas = createCanvas(windowWidth, 720);
    canvas.parent('canvasHTML');
    o.size = floor(width / shapeWidth);
    util.initArray();
    buttons();
}

function draw() {
    background(0);
    util.rectangulars(height, shapeWidth);
}

window.setup = setup;
window.draw = draw;
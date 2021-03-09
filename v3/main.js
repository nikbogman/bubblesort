import {array} from './variables.js';
import * as util from './modules/utils.js';
import buttons from './modules/buttons.js';

const ms = 0;
const shapeWidth = 20;

<<<<<<< HEAD
window.setup = () => {
    const canvas = createCanvas(windowWidth, 720).parent('canvasHTML');
    array.size = floor(width / shapeWidth);
=======
import * as util from './modules/utils.js';
import buttons from './modules/buttons.js';

function setup() {
    const canvas = createCanvas(windowWidth, 720);
    canvas.parent('canvasHTML');
    o.size = floor(width / shapeWidth);
>>>>>>> 9fbff04a2b54a8ed63549d520dc6567218684429
    util.initArray();
    buttons();
}

window.draw = () => {
    background(0);
    util.rectangulars(height, shapeWidth);
}
<<<<<<< HEAD
=======

window.setup = setup;
window.draw = draw;
>>>>>>> 9fbff04a2b54a8ed63549d520dc6567218684429

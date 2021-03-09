import {array} from './variables.js';
import * as util from './modules/utils.js';
import buttons from './modules/buttons.js';

const ms = 0;
const shapeWidth = 20;

window.setup = () => {
    const canvas = createCanvas(windowWidth, 720).parent('canvasHTML');
    array.size = floor(width / shapeWidth);

    util.initArray();
    buttons();
}

window.draw = () => {
    background(0);
    util.rectangulars(height, shapeWidth);
}

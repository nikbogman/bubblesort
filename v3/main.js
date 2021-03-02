export var a = {
    values:[],
    states:[],
    active:false,
    pauseFlag:false
}

export const shapeWidth = 20;
const ms = 1;

import * as util from './modules/utils.js';
import bubble from './modules/sorts/bubble.js';
import selection from './modules/sorts/selection.js';
import insertation from './modules/sorts/insertation.js';
import shell from './modules/sorts/shell.js';
import gnome from './modules/sorts/gnome.js';
import cocktail from './modules/sorts/cocktail.js';
import pancake from './modules/sorts/pancake.js';

function buttonSet() {
    createButton("reset").class('button button1').mousePressed(util.initArray);
    createButton("pause").class('button button1').mousePressed(util.pause);
    createButton("bubble").class('button button1').mousePressed(()=>{bubble(a.values)});
    createButton("selection").class('button button1').mousePressed(()=>{selection(a.values)});
    createButton("insertation").class('button button1').mousePressed(()=>{insertation(a.values)});
    createButton("gnome").class('button button1').mousePressed(()=>{gnome(a.values)});
    createButton("shell").class('button button1').mousePressed(()=>{shell(a.values)});
    createButton("cocktail").class('button button1').mousePressed(()=>{cocktail(a.values)});
    createButton("pancake").class('button button1').mousePressed(()=>{pancake(a.values)});
}
function setup() {
    var canvas = createCanvas(windowWidth, 720);
    canvas.parent('canvasHTML');
    util.initArray();
    buttonSet();
}

function draw() {
    background(0);
    util.rectangulars(height);
}

window.setup = setup;
window.draw = draw;
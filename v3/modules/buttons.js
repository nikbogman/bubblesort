import { array, flags as f } from '../variables.js';
import { initArray } from './utils.js';
import bubble from './sorts/bubble.js';
import selection from './sorts/selection.js';
import insertation from './sorts/insertation.js';
import shell from './sorts/shell.js';
import gnome from './sorts/gnome.js';
import cocktail from './sorts/cocktail.js';
import pancake from './sorts/pancake.js';
import quick from './sorts/quick.js';

const activeError = "You cannot reset or activate another sort while one is running. Wait...";
const sortedError = "You cannot activate sort if the values are already sorted. Restart";

<<<<<<< HEAD
async function check(sort, args) {
    if (!f.active) {
        if (!f.sorted) {
            f.active = true;
            f.sorted = true;
            const temp = await sort(args);
            f.active = false;
=======
async function check(sort) {
    if (!o.active$) {
        if (!o.sorted$) {
            o.active$ = true;
            o.sorted$ = true;
            const temp = await sort(o.values);
            o.active$ = false;
>>>>>>> 9fbff04a2b54a8ed63549d520dc6567218684429
            return temp;
        } else
            alert(sortedError);
    } else
        alert(activeError);
}

export default function () {
    createButton("pause")
        .class('button button1')
        .mousePressed(() => {
            if (f.pause)
                f.pause = false;
            else
                f.pause = true;
        });

    createButton("reset")
        .class('button button1')
        .mouseClicked(() => {
            if (!f.active)
                initArray();
            else
                alert(activeError);
        });

    createButton("bubble")
        .class('button button1')
        .mouseClicked(() => check(bubble, array.values))

    createButton("selection")
        .class('button button1')
        .mouseClicked(() => check(selection, array.values))

    createButton("insertation")
        .class('button button1')
        .mouseClicked(() => check(insertation, array.values))

    createButton("gnome")
        .class('button button1')
        .mouseClicked(() => check(gnome, array.values))

    createButton("shell")
        .class('button button1')
        .mouseClicked(() => check(shell, array.values))

    createButton("cocktail")
        .class('button button1')
        .mouseClicked(() => check(cocktail, array.values))

    createButton("pancake")
        .class('button button1')
        .mouseClicked(() => check(pancake, array.values))

    createButton("quick")
        .class('button button1')
        .mouseClicked(() => check(quick, array.values, 0, array.size - 1))

}

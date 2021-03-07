import { initArray } from './utils.js';
import bubble from './sorts/bubble.js';
import selection from './sorts/selection.js';
import insertation from './sorts/insertation.js';
import shell from './sorts/shell.js';
import gnome from './sorts/gnome.js';
import cocktail from './sorts/cocktail.js';
import pancake from './sorts/pancake.js';

import { o } from '../main.js';

const activeError = "You cannot reset or activate another sort while one is running. Wait...";
const sortedError = "You cannot activate sort if the values are already sorted. Restart";

async function check(sort) {
    if (!o.active$) {
        if (!o.sorted$) {
            o.active$ = true;
            o.sorted$ = true;
            let temp = await sort(o.values);
            o.active$ = false;
            return temp;
        }
        else {
            alert(sortedError);
        }
    }
    else
        alert(activeError);
}

export default function () {
    createButton("pause")
        .class('button button1')
        .mousePressed(() => {
            if (o.pause$)
                o.pause$ = false;
            else
                o.pause$ = true;
        });

    createButton("reset")
        .class('button button1')
        .mouseClicked(() => {
            if (!o.active$)
                initArray();
            else
                alert(activeError);
        });

    createButton("bubble")
        .class('button button1')
        .mouseClicked(() => { check(bubble) })

    createButton("selection")
        .class('button button1')
        .mouseClicked(() => { check(selection) })

    createButton("insertation")
        .class('button button1')
        .mouseClicked(() => { check(insertation) })

    createButton("gnome")
        .class('button button1')
        .mouseClicked(() => { check(gnome) })

    createButton("shell")
        .class('button button1')
        .mouseClicked(() => { check(shell) })

    createButton("cocktail")
        .class('button button1')
        .mouseClicked(() => { check(cocktail) })

    createButton("pancake")
        .class('button button1')
        .mouseClicked(() => { check(pancake) })

}

import { arrayStruct as a, flags as f } from '../variables.js';
import { init } from './utilities.js';
import bubble from './sorts/bubble.js';
import selection from './sorts/selection.js';
import insertation from './sorts/insertation.js';
import shell from './sorts/shell.js';
import gnome from './sorts/gnome.js';
import cocktail from './sorts/cocktail.js';
import pancake from './sorts/pancake.js';

const ACTIVE_ERROR = "You cannot reset or activate another sort while one is running. Wait...";
const SORTED_ERROR = "You cannot activate sort if the values are already sorted. Restart";

async function checkFlags(sort) {
    if (!f.active) {
        if (!f.sorted) {
            f.active = true;
            f.sorted = true;
            let temp = await sort(a.values);
            f.active = false;
            return temp;
        }
        else
            alert(SORTED_ERROR);
    }
    else
        alert(ACTIVE_ERROR);
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
                init();
            else
                alert(ACTIVE_ERROR);
        });

    createButton("bubble")
        .class('button button1')
        .mouseClicked(() => checkFlags(bubble))

    createButton("selection")
        .class('button button1')
        .mouseClicked(() => checkFlags(selection))

    createButton("insertation")
        .class('button button1')
        .mouseClicked(() => checkFlags(insertation))

    createButton("gnome")
        .class('button button1')
        .mouseClicked(() => checkFlags(gnome))

    createButton("shell")
        .class('button button1')
        .mouseClicked(() => checkFlags(shell))

    createButton("cocktail")
        .class('button button1')
        .mouseClicked(() => checkFlags(cocktail))

    createButton("pancake")
        .class('button button1')
        .mouseClicked(() => checkFlags(pancake))
}

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
const button = (sort) => {
    createButton(sort.name)
        .class('button button1')
        .mouseClicked(() => checkFlags(sort))
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
    button(bubble);
    button(cocktail);
    button(gnome);
    button(insertation);
    button(pancake);
    button(selection);
    button(shell);
}

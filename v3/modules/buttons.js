import { array, flags as f } from '../variables.js';
import { initArray } from './utils.js';
import bubble from './sorts/bubble.js';
import selection from './sorts/selection.js';
import insertation from './sorts/insertation.js';
import shell from './sorts/shell.js';
import gnome from './sorts/gnome.js';
import cocktail from './sorts/cocktail.js';
import pancake from './sorts/pancake.js';
import { quickSort} from './sorts/quick.js';

const activeError = "You cannot reset or activate another sort while one is running. Wait...";
const sortedError = "You cannot activate sort if the values are already sorted. Restart";

async function check(sort) {
    if (!f.active) 
    {
        if (!f.sorted) 
        {
            f.active = true;
            f.sorted = true;
            let  temp = await sort(array.values);
            f.active = false;
            return temp;
        } 
        else
            alert(sortedError);
    } 
    else
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
        .mouseClicked(() => check(bubble))

    createButton("selection")
        .class('button button1')
        .mouseClicked(() => check(selection))

    createButton("insertation")
        .class('button button1')
        .mouseClicked(() => check(insertation))

    createButton("gnome")
        .class('button button1')
        .mouseClicked(() => check(gnome))

    createButton("shell")
        .class('button button1')
        .mouseClicked(() => check(shell))

    createButton("cocktail")
        .class('button button1')
        .mouseClicked(() => check(cocktail))

    createButton("pancake")
        .class('button button1')
        .mouseClicked(() => check(pancake))

    createButton("quick")
        .class('button button1')
        .mouseClicked(() => quickSort(array.values, 0, array.size - 1))

}

import React, { useState } from 'react';
import { Button, IconButton, Slider, Typography } from '@material-ui/core';
import { pause, play, shuffle, unfill, fill } from '../svgs/_exportSvgs_';
import * as sort from '../sorting-algorithms/_exportAll_';
import { init } from './utilities';
import '../styles/Menu.css';
export let isArrayReset = false;
export let isSortingPaused = false;

const Menu = (props) => {

    //flags
    const [timer, setTimer] = useState(0);
    const [disableButtons, setDisableButtons] = useState(false);
    const [stopIcon, setStopIcon] = useState(pause);
    const [strokeIcon, setStrokeIcon] = useState(unfill);

    const handleClick = async (e, func) => {
        if (disableButtons)
            return;
        setDisableButtons(true);
        let timeBegining = 0, timeEnding = 0;
        new Promise(resolve => resolve(isArrayReset = false, timeBegining = performance.now()))
            .then(
                await func(props.array, props.colors, props.size, props.ms),
                timeEnding = performance.now()
            )
            .then(
                setTimer(timeEnding - timeBegining),
                setDisableButtons(false)
            );
    }

    const PauseButton = () => {
        return <IconButton onClick={() => {
            isSortingPaused = !isSortingPaused
            isSortingPaused ? setStopIcon(play) : setStopIcon(pause);
        }}><img src={stopIcon} alt="stop" /></IconButton>;
    }

    const ShuffleButton = () => {
        return <IconButton onClick={async (e) => {
            init(
                props.array,
                props.colors,
                props.size
            );
            setStopIcon(pause);
            setTimer(0);
            isArrayReset = true;
            isSortingPaused = false;
        }}><img src={shuffle} alt="shuffle" /></IconButton>;
    }

    const SortButtons = () => {
        return <div className="sorts">
            <Button disabled={disableButtons} onClick={(e) => handleClick(e, sort.bubble)}>bubble</Button>
            <Button disabled={disableButtons} onClick={(e) => handleClick(e, sort.insertation)}>insertation</Button>
            <Button disabled={disableButtons} onClick={(e) => handleClick(e, sort.selection)}>selection</Button>
            <Button disabled={disableButtons} onClick={(e) => handleClick(e, sort.gnome)}>gnome</Button>
            <Button disabled={disableButtons} onClick={(e) => handleClick(e, sort.cocktail)}>cocktail</Button>
            <Button disabled={disableButtons} onClick={(e) => handleClick(e, sort.shell)}>shell</Button>
            <Button disabled={disableButtons} onClick={(e) => handleClick(e, sort.pancake)}>pancake</Button>
            <Button disabled={disableButtons} onClick={(e) => handleClick(e, sort.quick)}>quick</Button>
        </div>;
    }

    const StrokeButton = () => {
        return <IconButton onClick={(e) => {
            props.handleStrokeChange(e);
            props.stroke ? setStrokeIcon(unfill) : setStrokeIcon(fill);
        }}><img src={strokeIcon} alt="stroke-icon" /></IconButton>
    }

    return (
        <div className="menu">
            <div className="controls">
                <Typography id="discrete-slider-small-steps">
                    values:
                </Typography>
                <Slider
                    className="slider"
                    disabled={disableButtons}
                    min={0}
                    max={props.maxStep}
                    value={props.stepIndex}
                    onChange={props.handleChange}
                    marks
                />
                <Typography id="discrete-slider-small-steps">
                    delay:
                </Typography>
                <Slider
                    className="slider"
                    disabled={disableButtons}
                    step={50}
                    min={0}
                    max={1000}
                    value={props.ms}
                    onChange={props.handleDelayChange}
                    marks
                />
                <StrokeButton />
                <ShuffleButton />
                <PauseButton />
            </div>
            <div className="panel">
                <SortButtons />
                <Typography style={{ display: 'inline' }}>
                    {timer !== 0 ? '⌛:' : '⏳:'}
                </Typography>
                <h4
                    style={{ fontStyle: 'italic', marginLeft: '10px', display: 'inline' }}
                >{timer}ms</h4>
                <div className="footer">
                    <h1>SAV</h1>
                    <h3> - Sorting Algorithm Visualizer</h3>
                    <IconButton>
                        <a href="https://github.com/nicolaMAN/SAV">
                            <img
                                src={'http://pngimg.com/uploads/github/github_PNG40.png'}
                                height="50px"
                                alt="github-link"
                            />
                        </a>
                    </IconButton>
                </div>
            </div>
        </div >
    )
}

export default Menu;


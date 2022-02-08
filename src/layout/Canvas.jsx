import React, { Component } from 'react';
import p5 from 'p5';
<<<<<<< Updated upstream
import { init } from './utilities';

const GREEN = '#4ce600';
const RED = '#FF4500';
const WHITE = 255;
const BLACK = 0;
const {
    REACT_APP_CANVAS_WIDTH,
    REACT_APP_CANVAS_HEIGHT,
} = process.env;
=======
import constants from '../shared/constants';
import global from '../shared/common';
import { AppContext } from '../contexts/AppContext';
>>>>>>> Stashed changes

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    Sketch = (p5) => {
        p5.setup = () => p5.createCanvas(REACT_APP_CANVAS_WIDTH, REACT_APP_CANVAS_HEIGHT);
        p5.draw = () => {
            p5.clear();
            for (var i = 0; i < this.props.size; i++) {
                this.props.stroke ? p5.stroke(WHITE) : p5.noStroke();
                if (this.props.colors[i] === 1)
                    p5.fill(RED);
                else if (this.props.colors[i] === 2)
                    p5.fill(GREEN);
                else
                    p5.fill(BLACK);
                p5.rect(i * this.props.shapeWidth,
                    REACT_APP_CANVAS_HEIGHT - this.props.array[i],
                    this.props.shapeWidth, this.props.array[i]
                );
            }
        }
    }

    initialize(properties) {
        init(
            properties.array,
            properties.colors,
            properties.size
        );

    }

    componentDidMount() {
        this.initialize(this.props);
        this.myP5 = new p5(this.Sketch, this.canvasRef.current);
        return;

    }

    componentWillReceiveProps(newProps) {
        if (newProps.shapeWidth !== this.props.shapeWidth) {
            this.myP5.remove();
            this.initialize(newProps);
            this.myP5 = new p5(this.Sketch, this.canvasRef.current);
        }
    }
    render() {
        return <div ref={this.canvasRef} />
    }
}

export default Canvas;
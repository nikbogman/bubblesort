import React, { Component } from 'react';
import p5 from 'p5';
import { init } from './utilities';

const GREEN = '#4ce600';
const RED = '#FF4500';
const WHITE = 255;
const BLACK = 0;
const {
    REACT_APP_CANVAS_WIDTH,
    REACT_APP_CANVAS_HEIGHT,
} = process.env;

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    Sketch = (p) => {
        p.setup = () => p.createCanvas(REACT_APP_CANVAS_WIDTH, REACT_APP_CANVAS_HEIGHT);
        p.draw = () => {
            p.background(WHITE);
            for (var i = 0; i < this.props.size; i++) {
                this.props.stroke ? p.stroke(WHITE) : p.noStroke();
                if (this.props.colors[i] === 1)
                    p.fill(RED);
                else if (this.props.colors[i] === 2)
                    p.fill(GREEN);
                else
                    p.fill(BLACK);
                p.rect(i * this.props.shapeWidth,
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
        this.myP5 = new p5(this.Sketch, this.canvasRef.current);
    }

    componentDidMount() {
        return this.initialize(this.props);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.shapeWidth !== this.props.shapeWidth) {
            this.myP5.remove();
            this.initialize(newProps);
        }
    }
    render() {
        return <div ref={this.canvasRef} />
    }
}

export default Canvas;
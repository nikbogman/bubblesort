import React, { Component } from 'react';
import p5 from 'p5';
import { init } from './utilities';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(this.props.canvas.width, this.props.canvas.height);
        }
        
        const GREEN = '#4ce600';
        const RED = '#FF4500';
        const WHITE = 255;
        const BLACK = 0;

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
                    this.props.canvas.height - this.props.array[i],
                    this.props.shapeWidth, this.props.array[i]
                );
            }
        }
    }

    componentDidMount() {
        init(
            this.props.array,
            this.props.colors,
            this.props.size,
            this.props.canvas.height,
        );
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.shapeWidth !== this.props.shapeWidth ) {
            this.myP5.remove();
            init(
                newProps.array,
                newProps.colors,
                newProps.size,
                newProps.canvas.height,
            );
            this.myP5 = new p5(this.Sketch, this.myRef.current);
        }
    }
    render() {
        return <div ref={this.myRef} />
    }
}

export default Canvas;
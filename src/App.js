import './styles/App.css';
import React, { Component } from 'react';
import Canvas from './components/sketch';
import Menu from './components/menu';

const {
  REACT_APP_CANVAS_WIDTH,
  REACT_APP_CANVAS_HEIGHT,
} = process.env;
export const STEPS = [1280, 640, 320, 160, 128, 80, 64, 40, 32, 20, 16, 10, 8, 5, 4, 2, 1]; // the number of elements named steps

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,       //ehe index in the steps
      size: 0,       //array size

      delay: 0,      //delay in ms

      stroke: false, // stroke of the shapes
      shapeWidth: 0  //the width of the shapes
    }
    this.array = [];
    this.colors = [];// the coloration 
  }

  onChange = (index) => {
    return new Promise(resolve => {
      this.setState({
        step: index,
        shapeWidth: STEPS[index],
        size: REACT_APP_CANVAS_WIDTH / STEPS[index]
      }, resolve)
      this.array.length = REACT_APP_CANVAS_WIDTH / STEPS[index];
      this.colors = [...this.array].fill(0);
    });
  }

  componentWillMount() {
    return this.onChange(6);
  }

  delayChange = (e, data) => {
    this.setState({
      delay: data
    })
  };

  strokeChange = (e) => this.setState((prevState, props) => {
    return {
      stroke: !prevState.stroke
    }
  });

  render() {
    return (
      <>
        <div className="App">
          <Canvas
            array={this.array}
            colors={this.colors}
            size={this.state.size}
            shapeWidth={this.state.shapeWidth}
            stroke={this.state.stroke}
          />

          <Menu
            array={this.array}
            colors={this.colors}
            size={this.state.size}
            stepIndex={this.state.step}
            shapeWidth={this.state.shapeWidth}
            stroke={this.state.stroke}
            ms={this.state.delay}
            handleChange={(e, data) => this.onChange(data)}
            handleDelayChange={(e, data) => this.setState({ delay: data })}
            handleStrokeChange={(e) => this.setState((prevState, props) => {
              return {
                stroke: !prevState.stroke
              }
            })}
          />
        </div>
      </>
    );
  }
}

export default App;


import './styles/App.css';
import React, { Component } from 'react';
import Canvas from './components/sketch';
import Menu from './components/menu';

const {
  REACT_APP_CANVAS_WIDTH,
  REACT_APP_CANVAS_HEIGHT,
} = process.env;
export const STEPS = [1280, 640, 320, 160, 128, 80, 64, 40, 32, 20, 16, 10, 8, 5, 4, 2, 1];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      shapeWidth: 0,
      size: 0,
      delay: 0,
      stroke: false
    }
    this.array = [];
    this.colors = [];
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

  handleChange = (e, data) => {
    this.onChange(data);
  }
  render() {
    return (
      <>
        <div className="App">
          <Canvas
            array={this.array}
            colors={this.colors}
            shapeWidth={this.state.shapeWidth}
            stroke={this.state.stroke}
            size={this.state.size}
          />

          <Menu
            maxStep={STEPS.length - 1}
            stepIndex={this.state.step}
            size={this.state.size}
            array={this.array}
            colors={this.colors}
            shapeWidth={this.state.shapeWidth}
            stroke={this.state.stroke}
            height={REACT_APP_CANVAS_HEIGHT}
            ms={this.state.delay}
            handleChange={this.handleChange}
            handleDelayChange={this.delayChange}
            handleStrokeChange={this.strokeChange}
          />
        </div>
      </>
    );
  }
}

export default App;


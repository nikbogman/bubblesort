import './styles/App.css';
import React, { Component } from 'react';
import Canvas from './components/sketch';
import Menu from './components/menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.canvas = {
      width: 1280,
      height: 480
    }
    this.steps = [1280, 640, 320, 160, 128, 80, 64, 40, 32, 20, 16, 10, 8, 5, 4, 2, 1];
    this.state = {
      stepIndex: 0,
      shapeWidth: 0,
      arraySize: 0,
      msDelay: 0,
      stroke: false
    }
    this.array = [];
    this.colors = [];
  }

  componentWillMount() {
    this.setState({
      stepIndex: 6,
      shapeWidth: this.steps[6],
      arraySize: this.canvas.width / this.steps[6]
    })
    this.array.length = this.canvas.width / this.steps[6];
    this.colors = [...this.array].fill(0);
  }


  handleChange = (e) => {
    const inputValue = parseInt(e.target.value);
    new Promise(resolve => {
      this.setState({
        stepIndex: inputValue,
        shapeWidth: this.steps[inputValue],
        arraySize: this.canvas.width / this.steps[inputValue]
      }, resolve)
      this.array.length = this.canvas.width / this.steps[inputValue];
      this.colors = [...this.array].fill(0);
    })
  }

  handleDelayChange = (e) => {
    this.setState({
      msDelay: parseInt(e.target.value)
    });
  }

  handleStrokeChange = (e) => {
    this.setState((prevState, props) => {
      return {
        stroke: !prevState.stroke
      }
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <Canvas
            canvas={this.canvas}
            array={this.array}
            colors={this.colors}
            size={this.canvas.width}
            shapeWidth={this.state.shapeWidth}
            stroke={this.state.stroke}
          />

          <Menu
            maxStep={this.steps.length - 1}
            stepIndex={this.state.stepIndex}
            array={this.array}
            colors={this.colors}
            shapeWidth={this.state.shapeWidth}
            size={this.state.arraySize}
            stroke={this.state.stroke}
            height={this.canvas.height}
            ms={this.state.msDelay}
            handleChange={this.handleChange}
            handleDelayChange={this.handleDelayChange}
            handleStrokeChange={this.handleStrokeChange}
          />
        </div>
      </>
    );
  }
}

export default App;


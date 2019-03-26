import React, { Component } from 'react';
import mathjs from 'mathjs';
import './App.css';

class App extends Component {
  state = {
    activeNum: [],
    storedSum: [],
    answer: 0,
    displayNum: 0,
  }

  stateClear = () => {
    this.setState({activeNum: []})
    this.setState({storedSum: []})
    this.setState({answer: 0})
  }

  activeNumPusher = (newNum) => {
    this.setState({activeNum: [...this.state.activeNum, newNum]})
  }

  sumPusher = (operator) => {
    let tempNumStr;
    tempNumStr = this.state.activeNum.join("");
    this.setState({activeNum: []})
    this.setState({storedSum: [...this.state.storedSum, tempNumStr, operator]})
  }

  sumGenerator = (temp) => {
    let tempAnsString;
    tempAnsString = [...this.state.storedSum, temp.join("")];
    let tempArray = tempAnsString.join('');
    this.setState({answer: mathjs.eval(tempArray)})
  }

  render() {
    return (
      <div className="container">

        <div className="display-container">
          <h1>{this.state.activeNum}</h1>
          <h1>{this.state.answer}</h1>
          <h1>{this.state.displayNum}</h1>
        </div>

        <div className="grid-container">

          {/* Operators */}

          <div className="ac">
            <button onClick={() => this.stateClear()}>A/C</button>
          </div>
          <div className="negative">
            <button>+/-</button>
          </div>
          <div className="percentage">
            <button>%</button>
          </div>
          <div className="divide">
            <button onClick={() => this.sumPusher("/")}>÷</button>
          </div>
          <div className="multi">
            <button onClick={() => this.sumPusher("*")}>×</button>
          </div>
          <div className="minus">
            <button onClick={() => this.sumPusher("-")}>-</button>
          </div>
          <div className="add">
            <button onClick={() => this.sumPusher("+")}>+</button>
          </div>
          <div className="equals">
            <button onClick={() => this.sumGenerator(this.state.activeNum)}>=</button>
          </div>

          {/* Numbers */}

          <div className="zero">
            <button onClick={() => this.activeNumPusher(0)}>0</button>
          </div>
          <div className="point">
            <button onClick={() => this.activeNumPusher(".")}>•</button>
          </div>
          <div className="one">
            <button onClick={() => this.activeNumPusher(1)}>1</button>
          </div>
          <div className="two">
            <button onClick={() => this.activeNumPusher(2)}>2</button>
          </div>
          <div className="three">
            <button onClick={() => this.activeNumPusher(3)}>3</button>
          </div>
          <div className="four">
            <button onClick={() => this.activeNumPusher(4)}>4</button>
          </div>
          <div className="five">
            <button onClick={() => this.activeNumPusher(5)}>5</button>
          </div>
          <div className="six">
            <button onClick={() => this.activeNumPusher(6)}>6</button>
          </div>
          <div className="seven">
            <button onClick={() => this.activeNumPusher(7)}>7</button>
          </div>
          <div className="eight">
            <button onClick={() => this.activeNumPusher(8)}>8</button>
          </div>
          <div className="nine">
            <button onClick={() => this.activeNumPusher(9)}>9</button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // this.increment = this.increment.bind();  Arrow Function = No Binding
  }
  render() {
    return (
      <div className="counter">
        <CounterButton
          value={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          value={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          value={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          value={100}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="resetButton" onClick={this.resetCounter}>
            RESET
          </button>
        </div>
      </div>
    );
  }
  increment = (value) => {
    // console.log(`Child Increment - ${value}`);
    return this.setState({
      counter: this.state.counter + value,
    });
  };
  decrement = (value) => {
    return this.setState({
      counter: this.state.counter - value,
    });
  };
  resetCounter = () => {
    this.setState({
      counter: 0,
    });
  };
}
export default Counter;

import React, { Component } from "react";
import "./Counter.css";
class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // this.increment = this.increment.bind();  Arrow Function = No Binding
  }
  render() {
    return (
      <div className="counterButton">
        <button onClick={this.increment}>+{this.props.value}</button>
        <button onClick={this.decrement}>-{this.props.value}</button>
      </div>
    );
  }
  increment = () => {
    this.props.incrementMethod(this.props.value);
    return this.setState({
      counter: this.state.counter + this.props.value,
    });
  };

  decrement = () => {
    this.props.decrementMethod(this.props.value);
    return this.setState({
      counter: this.state.counter - this.props.value,
    });
  };
}

export default CounterButton;

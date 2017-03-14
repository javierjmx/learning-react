import React from 'react';

const update = (model, msg) => {
  switch (msg) {
    case 'INCREMENT':
      return {num: model.num + 1};
    case 'DECREMENT':
      return {num: model.num - 1};
    default:
      return null;
  }
};

class ButtonsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState(update(this.state, 'DECREMENT'));
  }

  increment() {
    this.setState(update(this.state, 'INCREMENT'));
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <div>{this.state.num}</div>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default ButtonsApp;

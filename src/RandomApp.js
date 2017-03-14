import React from 'react';

const update = (msg, model) => {
  switch (msg) {
    case 'ROLL':
      return {dieFace: parseInt(7 * Math.random(), 10)};
    default:
      return model;
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dieFace: 1
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    this.setState(update('ROLL', this.state));
  }

  render() {
    return (
      <div>
        <h1>{this.state.dieFace}</h1>
        <button onClick={this.roll}>Roll</button>
      </div>);
  }
}

export default App;

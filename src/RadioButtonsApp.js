import React from 'react';

const update = (newFontSize, model) => (
  {...model, fontSize: newFontSize}
);

const sizeToStyle = fontSize => {
  let size;

  switch (fontSize) {
    case 'SMALL':
      size = '0.8em';
      break;
    case 'MEDIUM':
      size = '1em';
      break;
    case 'LARGE':
    default:
      size = '1.2em';
  }

  return {fontSize: size};
};

const Radio = ({msg, value}) => (
  <label style={{padding: '20px'}}>
    <input type="radio" name="font-size" onClick={msg} />
    {value}
  </label>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 'MEDIUM',
      content: 'Hola, perros!'
    };
    this.switchToSmall = this.switchToSmall.bind(this);
    this.switchToMedium = this.switchToMedium.bind(this);
    this.switchToLarge = this.switchToLarge.bind(this);
  }

  switchToSmall() {
    this.setState(update('SMALL', this.state));
  }

  switchToMedium() {
    this.setState(update('MEDIUM', this.state));
  }

  switchToLarge() {
    this.setState(update('LARGE', this.state));
  }

  render() {
    return (
      <div>
        <fieldset>
          <Radio value="Small" msg={this.switchToSmall} />
          <Radio value="Medium" msg={this.switchToMedium} />
          <Radio value="Large" msg={this.switchToLarge} />
        </fieldset>
        <p style={sizeToStyle(this.state.fontSize)}>
          {this.state.content}
        </p>
      </div>);
  }
}

export default App;

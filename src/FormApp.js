import React from 'react';

const update = (action, model) => {
  switch (action.type) {
    case 'NAME':
      return {...model, name: action.value};
    case 'PASSWORD':
      return {...model, password: action.value};
    case 'PASSWORD_AGAIN':
      return {...model, passwordAgain: action.value};
    default:
      return model;
  }
};

const Validation = ({model}) => {
  const [color, message] = model.password === model.passwordAgain
    ? ['green', 'OK']
    : ['red', 'Passwords do not match!'];

  return <div style={{color}}>{message}</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      passwordAgain: ''
    };
    this.name = this.name.bind(this);
    this.password = this.password.bind(this);
    this.passwordAgain = this.passwordAgain.bind(this);
  }

  name(e) {
    this.setState(update({type: 'NAME', value: e.target.value}, this.state));
  }

  password(e) {
    this.setState(update({type: 'PASSWORD', value: e.target.value}, this.state));
  }

  passwordAgain(e) {
    this.setState(update({type: 'PASSWORD_AGAIN', value: e.target.value}, this.state));
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" onChange={this.name} />
        <input type="password" placeholder="Password" onChange={this.password} />
        <input type="password" placeholder="Re-enter Password" onChange={this.passwordAgain} />
        <Validation model={this.state} />
      </div>);
  }
}

export default App;

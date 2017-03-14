import get from 'axios';
import React from 'react';

const getRandomGif = topic =>
  get(`https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${topic}`)
  .then(response => ({
    type: 'NEW_GIF',
    ok: true,
    newUrl: response.data.data.image_url
  }))
  .catch(error => ({
    type: 'NEW_GIF',
    ok: false,
    error
  }));

const init = topic => ({
  model: {
    topic,
    gifUrl: 'waiting.gif'
  },
  command: getRandomGif(topic)
});

const update = (msg, model) => {
  switch (msg.type) {
    case 'NEW_GIF':
      if (msg.ok) {
        return {model: {...model, gifUrl: msg.newUrl}};
      }
      return {model};

    case 'MORE_PLEASE':
      return {model, command: getRandomGif(model.topic)};

    default:
      return {model};
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      gifUrl: ''
    };;
    this.morePlease = this.morePlease.bind(this);
  }

  dispatch(command) {
    switch (command.type) {
      case 'NEW_GIF':
        return this.newGif(command);
      default:
        return null;
    }
  }

  doMessage({model, command}) {
    this.setState(model);
    if (command) {
      command.then(result => this.dispatch(result));
    }
  }

  componentDidMount() {
    this.doMessage(init('cats'));
  }

  morePlease() {
    this.doMessage(update({type: 'MORE_PLEASE'}, this.state));
  }

  newGif(result) {
    this.doMessage(update(result, this.state));
  }

  render() {
    return (
      <div>
        <h2>{this.state.topic}</h2>
        <button onClick={this.morePlease}>More Please</button>
        <br />
        <img alt="GIF" src={this.state.gifUrl} />
      </div>);
  }
}

export default App;

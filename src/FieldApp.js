import React from 'react';

const update = (newContent, oldContent) => ({
  content: newContent
});

const myStyle = () => ({
  width: '100%',
  height: '40px',
  padding: '10px 0',
  fontSize: '2em',
  textAlign: 'center'
});

const reverse = str =>
  str.split('').reverse().join('');

class FieldApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};
    this.newContent = this.newContent.bind(this);
  }

  newContent(e) {
    this.setState(update(e.target.value, this.state));
  }

  render() {
    return (
      <div>
        <input placeholder="Text to reverse" style={myStyle()} onChange={this.newContent} />
        <div style={myStyle()}>{reverse(this.state.content)}</div>
      </div>);
  }
}

export default FieldApp;

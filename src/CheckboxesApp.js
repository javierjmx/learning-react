import React from 'react';

const update = (msg, model) => {
  switch (msg) {
    case 'TOGGLE_NOTIFICATIONS':
      return {...model, notifications: !model.notifications};
    case 'TOGGLE_AUTOPLAY':
      return {...model, autoplay: !model.autoplay};
    case 'TOGGLE_LOCATION':
      return {...model, location: !model.location};
    default:
      return model;
  }
};

const Checkbox = ({msg, name}) => (
  <label style={{padding: '20px'}}>
    <input type="checkbox" onClick={msg}/>
    {name}
  </label>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: true,
      autoplay: true,
      location: true
    };
    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.toggleAutoplay = this.toggleAutoplay.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
  }

  toggleNotifications() {
    this.setState(update('TOGGLE_NOTIFICATIONS', this.state));
  }

  toggleAutoplay() {
    this.setState(update('TOGGLE_AUTOPLAY', this.state));
  }

  toggleLocation() {
    this.setState(update('TOGGLE_LOCATION', this.state));
  }

  render() {
    return (
      <fieldset>
        <Checkbox msg={this.toggleNotifications} name="Email Notifications" />
        <Checkbox msg={this.toggleAutoplay} name="Video Autoplay" />
        <Checkbox msg={this.toggleLocation} name="Use Location" />
      </fieldset>);
  }
}

export default App;

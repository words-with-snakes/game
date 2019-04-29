import React from 'react';
import AddUser from '../containers/AddUser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.debug = !!this.props.debug;

    this.state = { gameState: { date: new Date() } };
    this.ws = new WebSocket('ws://127.0.0.1:8080');
    this.rate = 1000;

    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.ws.onopen = () => {
      this.ws.send('something');
    };

    this.ws.onmessage = (data) => {
      console.log('Recieved', data);
    };
    this.update();
  }

  update() {
    setTimeout(() => {
      this.setState({ gameState: { date: new Date() } });
      this.ws.send(JSON.stringify(this.state.gameState));
      this.update();
    }, this.rate);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.gameState.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Sender from './Sender'
import Timer from './Timer'
import Incrementer from './Incrementer'
import Clocks from './Clocks'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Sender/>
        <Timer/>
        <Incrementer/>
        <Clocks/>
      </div>
    );
  }
}
export default App;

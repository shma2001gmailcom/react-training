import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Timer from './Timer'
import Incrementer from './Incrementer'
import Clocks from './Clocks'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {username : ''};
    
  }

  handleClick() {
    var x;
    fetch('http://localhost:8080/react-back/index')
    .then(response => response.json())
    .then(data => this.setState({
      username: data.name
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <div className='button__container'>
          <button className='button' onClick={() => this.handleClick()}>Click Me</button>
        </div>
        <p>{this.state.username}</p>
        <Timer/>
        <Incrementer/>
        <Clocks/>
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Timer from './Timer'
import Incrementer from './Incrementer'
import Clocks from './Clocks'

class App extends Component {
  constructor() {
    super();
    this.state = {username : ''};
  }

  handleClick() {
    fetch('http://localhost:8080/react-back/index')//url to fetch
     .then(response => response.json())
     .then(data => this.setState({
       username: data.name
      }));
  }

  render() {
    return (
      <div className="App">
        <div className='button__container'>
          <button className='button' onClick={() => this.handleClick()}>fetch</button>
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

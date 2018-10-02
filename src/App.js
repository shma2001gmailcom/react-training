import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Timer from './Timer'
import Incrementer from './Incrementer'
import Clocks from './Clocks'

class App extends Component {
  constructor() {
    super();
    this.state = {
      username : '',
      value:''
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value, username: this.state.username});
  }
  
  handleClick() {
    fetch('http://localhost:8080/react-back/index?value='+ this.state.value)//url to fetch
     .then(response => response.json())
     .then(data => this.setState({
       value: this.state.value,
       username: data.name
      }));
  }

  render() {
    return (
      <div className="App">
        <div className='button__container'>
          <div><input className='input' width='50' value={this.state.value} onChange={(event) => this.handleChange(event)}/> </div>
          <div><button className='button' onClick={() => this.handleClick()}>fetch</button></div>
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

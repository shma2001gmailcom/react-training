import React, { Component } from 'react';
import './App.css';

class Sender extends Component {
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
        const host = 'http://localhost:';
        const port = 8080;
        const app = '/react-back/';
        const endPoint = 'request/for/misha';
        const url = host + port + app + endPoint + '?misha=';
        fetch(url + this.state.value)//url to fetch
            .then(response => response.json())
            .then(data => this.setState({
                    value: this.state.value,
                    username: data.name
          }));
      }
      render() {
        return (
            <div>
                <div className='button__container'>
                <div><input className='input' width='50' value={this.state.value} onChange={(event) => this.handleChange(event)}/> </div>
                <div><button className='button' onClick={() => this.handleClick()}>fetch</button></div>
                </div>
                <p>{this.state.username}</p>
            </div>
        );
    }
}
export default Sender
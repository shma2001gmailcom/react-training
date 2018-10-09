import React, { Component } from 'react';
import './App.css';

class Sender extends Component {
    constructor() {
        super();
        this.state = {
          username : '',
          value:'',
          message:''
        };
      }

      handleChange(event) {
        this.setState({
            value: event.target.value, 
            username: this.state.username, 
            message:this.state.message
        });
      }
      
      handleClick() {
        const host = 'http://localhost:';
        const port = 8080;
        const app = '/react-training-java/';
        const endPoint = 'request/for/misha';
        const url = host + port + app + endPoint + '?misha=';
        fetch(url + this.state.value)//url to fetch
            .then(response => response.json())
            .then(data => this.setState({
                    value: this.state.value,
                    username: data.name,
                    message: data.message
          }));
      }
      render() {
        return (
            <div>
                <div className='button-container'>
                    <div>
                        <input className='input' width='50' 
                        value={this.state.value}
                        onChange={(event) => this.handleChange(event)}/> 
                    </div>
                    <div>
                        <button className='button' onClick={() => this.handleClick()}>
                             fetch
                        </button>
                    </div>
                </div>
                <p>{this.state.username} {this.state.message}</p>
            </div>
        );
    }
}
export default Sender
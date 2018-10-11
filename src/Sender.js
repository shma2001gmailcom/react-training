import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class Sender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            value:'',
            message:''
        };
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
      
    handleClick() {
        const host = 'http://localhost:';
        const port = 8080;
        const app = '/react-training-java/';
        const endPoint = 'request/for/misha';
        const url = host + port + app + endPoint + '?misha=';
        const rq = Axios.create();
        const response = rq.get(url + this.state.value);
        response 
            .then(result=>{
                console.log(result.data.misha.name);
                console.log(result.data.message);
                this.setState({
                username:result.data.misha.name,
                message:result.data.message
            })})
            .catch((error) => {console.log('Request failed', error)});
        // fetch(url + this.state.value)//url to fetch
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Request succeeded with JSON response', data);
        //         this.setState({
        //             value: this.state.value,
        //             username: data.misha.name,
        //             message: data.message
        //          });
        //     })
        //     .catch((error) => {console.log('Request failed', error)});
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
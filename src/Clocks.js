import React, { Component } from 'react';

var INTERVAL = 100;

class Clocks extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
    }

    increment() {
        this.setState({date: new Date()});
    }
    
    render() {
      return (
        <div>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default Clocks
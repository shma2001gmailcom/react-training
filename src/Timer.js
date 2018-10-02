import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var INTERVAL = 100;
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      buttonText: 'reset'
    };
  }

  increment() {
    this.setState({
      value: this.state.value + 1,
      buttonText: 'reset'
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  reset() {
    this.setState({
      value: 0,
      buttonText: 'reset'
    });

  clearInterval(this.timerID);
    this.timerID = setInterval(() => this.increment(),  1000/INTERVAL);
    this.setState({})
  }

  render() {
    const value = this.state.value
    return (
      <div className='timer App'>
        <p/>
        <h2>Timer:</h2>
        <p/>
        <h2>
          <span>{this.hours(value)} : </span>
          <span>{this.minutes(value)} : </span>
          <span>{this.seconds(value)}</span>
        </h2>
        <button className='button' onClick={(event) => this.reset()}> {this.state.buttonText} </button>
      </div>
    );
  }

  seconds(value) {
    return this.addZero(Math.floor((value/100) % 60));
  }

  minutes(value) {
    return this.addZero(Math.floor(value % (100 * 60 * 60) / (100 * 60)));
  }

  hours(value) {
    return this.addZero(Math.floor(value % (100 * 60 * 60 * 24) / (100 * 60 * 60)));
  }

  addZero(value) {
    return value < 10 ? "0" + value : value;
  }
}
export default Timer;
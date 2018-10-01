import React, {
  Component
} from 'react';
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
    this.timerID = setInterval(() => this.increment(), 1000 / INTERVAL);
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
    this.timerID = setInterval(() => this.increment(), 1000 / INTERVAL);
    this.setState({})
  }

  render() {
    const value = this.state.value
    return (
      <div className='timer App'>
        <p><h2>Timer:</h2></p>
        <p><h2>
          <span>{Math.round(value/INTERVAL/60/60)} : </span>
          <span>{Math.round(value/INTERVAL/60)} : </span>
          <span>{Math.round(value/INTERVAL)} . </span>
          <span>{value % INTERVAL}</span>
        </h2></p>
        <button onClick={(event)=>this.reset()}>{this.state.buttonText}</button>
      </div>
    );
  }
}
ReactDOM.render( <Timer/> , document.getElementById('root'));
export default Timer;
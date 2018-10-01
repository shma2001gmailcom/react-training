import React, {Component} from 'react';

class Conditioner extends Component {
    constructor(props) {
      super(props);
      this.state = {temperature: 0};
    }

    onIncrease() {
      this.setState(prevState => ({
        temperature: prevState.temperature + 1
      }))
    }

    onDecrease(){
      this.setState(prevState => ({
        temperature: prevState.temperature - 1
      }))
    }

    render() {
      return (
        <div>
          <h2>Текущая температура: {this.state.temperature}</h2>
          <button onClick={(event) => this.onDecrease(event)}>-</button>
          <button onClick={(event) => this.onIncrease(event)}>+</button>
        </div>);
    }
  }
  export default Conditioner
import React, {
  Component
} from "react";

class Incrementer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  onIncrease() {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  }

  onDecrease() {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  }

  render() {
    return ( <div>
      <h2> Current value: {
        this.state.value
      } 
      </h2> <button onClick = {
        event => this.onDecrease(event)
      } > - </button> <
      button onClick = {
        event => this.onIncrease(event)
      } > + </button> </ div >
    );
  }
}
export default Incrementer;
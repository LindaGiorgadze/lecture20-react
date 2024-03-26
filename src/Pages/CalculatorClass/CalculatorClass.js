import { Component } from "react";
import { Button } from "react-bootstrap";

class CalculatorClass extends Component {
  state = {
    value1: 0,
    value2: 0,
    count: 0
  };

  //   componentDidMount() {
  //     alert('Component Mounted');
  //   };
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
    if (this.state.value1 !== prevState.value1) {
      console.log(prevState.value1);
    }
  }

  handleSum = () => {
    this.setState({
      count: parseInt(this.state.value1) + parseInt(this.state.value2)
    });
  };

  handleIncrement = () => {
    this.setState({
      count: parseInt(this.state.count) + 1
    });
  };
  handleDecrement = () => {
    this.setState({
      count: parseInt(this.state.count) - 1
    });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.value1}
          onChange={(e) =>
            this.setState({
              value1: e.target.value
            })
          }
        />
        <input
          type="number"
          value={this.state.value2}
          onChange={(e) =>
            this.setState({
              value2: e.target.value
            })
          }
        />
        <Button onClick={this.handleSum}>Culculate</Button>
        <br />
        <Button onClick={this.handleDecrement}>-</Button>
        <MyInput
          count={this.state.count}
          onChange={(e) =>
            this.setState({
              count: e.target.value
            })
          }
        />
        <Button onClick={this.handleIncrement}>+</Button>
      </div>
    );
  }
}

export default CalculatorClass;

export class MyInput extends CalculatorClass {
  render() {
    return (
      <input
        type="number"
        value={this.props.count}
        onChange={this.props.onChange}
      />
    );
  }
}

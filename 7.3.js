import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {count: 0, color: "black"};

    this.countColor=(num) => {
      if (num === 0) {
        this.setState({color: "black"});
      } else if (num > 0) {
        this.setState({color: "green"});
      } else {
        this.setState({color: "red"});
      }
    }
  
    this.increment=() =>{
      if (this.state.count < 10) {
        let newCount = this.state.count + 1;
        this.countColor(newCount);
        this.setState({count: newCount});
      }
    }
  
    this.decrement=() =>{
      if (this.state.count > -10) {
        let newCount = this.state.count - 1;
        this.countColor(newCount);
        this.setState({count: newCount});
      }
    }

  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <span style={{color: this.state.color}}>Current Count: {this.state.count}</span>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


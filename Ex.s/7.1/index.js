import React from 'react';
import ReactDOM from 'react-dom';

/* class App extends React.Component{
  constructor(props){
    super(props);

    this.state={count: 0};

    increment = () => {
      this.setState({
        count: this.state.count + 1
      });
    }
  }

  render(){
    return (

      <div>
      <button onClick={this.increment}>Increment!</button>
       <h1>Current Count: {this.state.count}</h1>
     </div>
    )
  }
} */

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { count: 0 }

    this.increment = () => {
      this.setState({
        count: this.state.count + 1
      });
    }

    this.decrement = () => {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  render() {
    return (
        <div>
          <button onClick={this.increment}>Increment!</button>
          <h3>Current Count: {this.state.count}</h3>
        </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


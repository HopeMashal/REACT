import React from 'react';
import ReactDOM from 'react-dom';
import Btn from "./components/Btn";

class App extends React.Component {
  state = { color: "" };

  displayBtns = (array) => {
    return array.map(mycolor => {
      return (
        <Btn text={mycolor} color={mycolor} parentCall={this.changeColor} />
      );
    });
  };

  changeColor = (mycolor) => {
    this.setState({ color: mycolor });
  };

  render() {
    const colors = ["blue", "red", "yellow"];
    return (
      <div>
        {this.displayBtns(colors)}
        <h1>The color selected is: {this.state.color}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


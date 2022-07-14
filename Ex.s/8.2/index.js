import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
  state = { type: "box" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ type: "box box-animation" });
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ type: "box" });
    }, 4000);
  }

  render() {
    return (
      <div className="container">
        <div
          className={this.state.type}
          style={{ background: "pink", height: "50px", width: "50px" }}
        ></div>
        <div
          className={this.state.type}
          style={{ background: "pink", height: "70px", width: "70px" }}
        ></div>
        <div
          className={this.state.type}
          style={{ background: "pink", height: "30px", width: "30px" }}
        ></div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
  state = { count: null, color: "rgb(128, 255, 212)", class: "box" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 0 });
    }, 0);
  }

  componentDidUpdate() {
    setTimeout(() => {
      const rratio = Math.floor(Math.random() * 255);
      const gratio = Math.floor(Math.random() * 255);
      const bratio = Math.floor(Math.random() * 255);
      this.setState({
        count: this.state.count + 1,
        color: `rgb(${rratio}, ${gratio}, ${bratio})`,
      });
      if (this.state.count === 5) {
        this.setState({ class: "circle" });
      }
    }, 500);
  }

  render() {
    return (
      <div>
        <div className={this.state.class} style={{ background: this.state.color}}></div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
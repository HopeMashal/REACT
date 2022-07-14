import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  Click = () => {
    this.inputRef.current.select();
    navigator.clipboard.writeText(this.inputRef.current.value);
  };
  render() {
    return (
      <div className="container">
        <label>What is the meaning of life?</label>
        <textarea ref={this.inputRef}></textarea>
        <button onClick={this.Click}>Copy</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


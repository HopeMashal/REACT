import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div className='input-container'>
        <input ref={this.inputRef}></input>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {visible : true , display : 'block'}

    this.play=()=> {
      this.setState({visible: !this.state.visible});
      if (this.state.visible === true) {
        this.setState({display: "none"});
      } else {
        this.setState({display: "block"});
      }
    }
  };

  render() {
    return (
      <div className="blocks">
        <button onClick={this.play}>show/hide</button>
        <div className='box' style={{display:this.state.display}}></div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

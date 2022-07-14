import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './spinner';
import './index.css'

class App extends React.Component {
  state = { timer: null, show: false, display:'none'};

  componentDidMount() {
    setTimeout(() => {
      this.setState({ timer: 10 , show:true, display:'block' });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.timer >= 0) {
      setTimeout(() => {
        this.setState({ timer: this.state.timer - 1 });
        if (this.state.timer === 0) {
          this.setState({ show: false , display:'none'});
        }
        if(this.state.timer === -2){
          this.setState({timer:'Timer is finished'});
        }
      }, 1000);
    }
  }

  render() {
    return (
      <div className="container">
        <div style={{display:this.state.display}}><Spinner /></div>
        <br/><br/>
        <h3 style={{color:'white'}}>{this.state.timer}</h3>
      </div>
      );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
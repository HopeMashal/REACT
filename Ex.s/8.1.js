import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state={favoriteColor:'green'};

  componentDidMount(){
    setInterval(() => {
      this.setState({favoriteColor:'black' })   
    }, 1000)
  }
  componentDidUpdate(){
    const div=document.querySelector('#attribute');
    div.innerHTML=`The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="attribute"></div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
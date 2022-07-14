import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from'./components/checkbox';

class App extends React.Component{

  render(){
    return(
      <div>
        <form>
          <CheckBox isChecked='' value="I read the term of the app" />
          <CheckBox isChecked='' value="I accept the term of the app" />
          <CheckBox isChecked='true' value="I want to get the weekly news letter" />
          <CheckBox isChecked='true' value="I want to get sales and offers" />
        </form>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


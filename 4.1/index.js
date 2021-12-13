import React from 'react';
import ReactDOM from 'react-dom';
import Button from './App';
import NotButton from './AppNot';
import './App.css';

const App=()=>{
  return(
    <div className='Container'>
      <Button text="Important"/>
      <NotButton text="Not Important"/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

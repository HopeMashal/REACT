import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/inputType';
import './index.css'

class App extends React.Component{

  state={resultDisplay:'none',inputDisplay:'flex'}

  onSearchSubmit=(first,last,age,message)=>{
    const firstname=document.querySelector('.firstname');
    const lastname=document.querySelector('.lastname');
    const theage=document.querySelector('.theage');
    const themessage=document.querySelector('.themessage');
    firstname.innerText=`First Name: ${first}`;
    lastname.innerText=`Last Name: ${last}`;
    theage.innerText=`Age: ${age}`;
    themessage.innerText=`Message: ${message}`;
    console.log(first,last,age,message);
    this.setState({resultDisplay:'flex',inputDisplay:'none'});
  }

  BackForm=()=>{
    this.setState({resultDisplay:'none',inputDisplay:'flex'});
  }

  SendForm=()=>{
    const resultContainer=document.querySelector(".container-result");
    const formElements = document.querySelector("form");
    resultContainer.innerHTML='<h3>🥳🥳🥳👏👏👏<br/>Congratulations you successfully sent this form</h3>';
    setTimeout(timer, 5000);
    function timer(){
      formElements.submit();
    }
  }

  render(){
    return(
      <div>
        <div style={{display:this.state.inputDisplay}}>
          <Input onSubmit={this.onSearchSubmit}/>
        </div>
        <div className='container-result' style={{display:this.state.resultDisplay}}>
            <h3 className='firstname'>First Name:</h3>
            <h3 className='lastname'>Last Name:</h3>
            <h3 className='theage'>Age:</h3>
            <h3 className='themessage'>Message:</h3>
            <div className='Buttons'>
              <button className="btn" onClick={this.BackForm}>Back</button>
              <button className='btn' onClick={this.SendForm}>Send Survey</button>
            </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

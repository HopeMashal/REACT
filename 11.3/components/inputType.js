import React from 'react';

class Input extends React.Component{
  state={first:'',last:'',age:'',message:''};

  onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state.first,this.state.last,this.state.age,this.state.message);
  }

  render(){
    return(
      <div className='container-input'>
        <form>
          <div className='div-input'>
            <label>First Name: </label>
            <input type="text" placeholder="Enter your first name" value={this.state.first} onChange={e=>{this.setState({first:e.target.value})}}/>
          </div>
          <div className='div-input'>
            <label>Last Name: </label>
            <input type="text" placeholder='Enter you last name' value={this.state.last} onChange={e=>{this.setState({last:e.target.value})}}/>
          </div>
          <div className='div-input'>
            <label>Age: </label>
            <select value={this.state.age} onChange={e=>{this.setState({age:e.target.value})}}>
              <option value=''>Select your age</option>
              <option value="0-15">0-15</option>
              <option value="15-20">15-20</option>
              <option value="20-25">20-25</option>
              <option value="25-30">25-30</option>
              <option value="30-35">30-35</option>
              <option value="35-40">35-40</option>
              <option value="Over 40">Over 40</option>
            </select>
          </div>
          <div className='div-input'>
            <label>Free Text: </label>
            <textarea placeholder="Your Message" value={this.state.message} onChange={e=>{this.setState({message:e.target.value})}}></textarea>
          </div>
          <input className='div-input' onClick={this.onFormSubmit} type="submit" value="Continue"/>
        </form>
      </div>
    );
  }
}

export default Input;

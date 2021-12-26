import React, { useState } from "react";
const Input=()=>{
  const [Seconds,setSeconds]=useState('');
  const [Minutes,setMinutes]=useState('');
  const [Hours,setHours]=useState('');

  const HandleSecond=(value)=>{
    setSeconds(value);
    setMinutes(value/60);
    setHours(value/3600);
  }
  const HandleMinute=(value)=>{
    setSeconds(value*60);
    setMinutes(value);
    setHours(value/60);
  }
  const HandleHour=(value)=>{
    setSeconds(value*3600);
    setMinutes(value*60);
    setHours(value);
  }
  return(
    <div>
      <div>
        <label>Seconds: </label>
        <input type="text" onChange={e=>HandleSecond(e.target.value)} value={Seconds}/>
      </div><br/>
      <div>
        <label>Minutes: </label>
        <input type="text" onChange={e=>HandleMinute(e.target.value)} value={Minutes}/>
      </div><br/>
      <div>
        <label>Hours: </label>
        <input type="text" onChange={e=>HandleHour(e.target.value)} value={Hours}/>
      </div>
    </div>
  )
}
export default Input;
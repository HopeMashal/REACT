import React from 'react';

const CheckBox=(props)=>{
  return(
    <div>
      <input type="checkbox" checked={props.isChecked} />{props.value}
    </div>
  )
}

export default CheckBox;
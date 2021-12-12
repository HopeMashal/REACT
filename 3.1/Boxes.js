import React from 'react';
import './style.css';

const Box1 =() =>{
  return(
    <div className="box1">
      <Box2 />
    </div>
  )
}
const Box2 =() =>{
  return(
    <div className="box2">
      <Box3 />
    </div>
  )
}
const Box3 =() =>{
  return(
    <div className="box3">
      <Box4 />
      <Box4 />
    </div>
  )
}
const Box4 =() =>{
  return(
    <div className="box4">
    </div>
  )
}

export default Box1;
import React from "react";

const Avatar = (props) => {
  return (
    <div className="avatar">
      <h3>{props.name}</h3>
      <div className="image">
        <img src={props.pic} alt={props.name} />
      </div>
    </div>
  );
};

export default Avatar;
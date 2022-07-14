import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <p>
        <b>Name:</b> {props.data.name}<br/>
        <b>Birthday:</b> {props.data.birthday}<br/>
        <b>Favorite Meats: </b>
        {props.data.favoriteFoods.meats.join(" & ")}<br/>
        <b>Favorite Fish: </b>
        {props.data.favoriteFoods.fish.join(" & ")}
      </p>
    </div>
  );
};

export default Card;
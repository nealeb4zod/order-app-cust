import React from "react";

const Food = (props) => {
  const handleFoodAdd = (e) => {
    props.addFoodToCart(e.target.value);
  };

  return (
    <li className="item">
      <b>{props.name}</b> - {props.price}{" "}
      <button type="button" value={props.index} onClick={handleFoodAdd}>
        Add
      </button>
    </li>
  );
};

export default Food;

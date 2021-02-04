import React from "react";

const Drink = (props) => {
  const handleDrinkAdd = (e) => {
    props.addDrinkToCart(e.target.value);
  };

  return (
    <li className="item">
      <b>{props.name}</b> - £{(props.price / 100).toFixed(2)}{" "}
      <button type="button" value={props.index} onClick={handleDrinkAdd}>
        Add
      </button>
    </li>
  );
};

export default Drink;

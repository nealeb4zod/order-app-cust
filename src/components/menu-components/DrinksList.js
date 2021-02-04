import React from "react";
import Drink from "./Drink";

const DrinksList = ({ drinks, addDrinkToCart }) => {
  return (
    <>
      <div className="menu-list-box">
        <h4>Drinks</h4>
        <ol>
          {drinks.map((drink, index) => {
            return (
              <Drink
                key={index}
                index={index}
                name={drink.name}
                price={drink.price}
                addDrinkToCart={addDrinkToCart}
              ></Drink>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default DrinksList;

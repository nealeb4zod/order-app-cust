import React from "react";
import Food from "./Food";

const FoodList = ({ foods, addFoodToCart }) => {
  return (
    <>
      <div className="menu-list-box">
        <h4>Foods</h4>
        <ol>
          {foods.map((food, index) => {
            return (
              <Food
                key={index}
                index={index}
                name={food.name}
                price={food.price}
                addFoodToCart={addFoodToCart}
              ></Food>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default FoodList;

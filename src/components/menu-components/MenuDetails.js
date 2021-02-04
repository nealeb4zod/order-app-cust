import React from "react";
import DrinksList from "./DrinksList";
import FoodList from "./FoodList";

const MenuDetails = ({ selectedMenu, addDrinkToCart, addFoodToCart }) => {
  return (
    <div className="details-box">
      <h3>{selectedMenu.name}</h3>

      <DrinksList
        drinks={selectedMenu.drinks}
        addDrinkToCart={addDrinkToCart}
      />
      <FoodList foods={selectedMenu.foods} addFoodToCart={addFoodToCart} />
    </div>
  );
};

export default MenuDetails;

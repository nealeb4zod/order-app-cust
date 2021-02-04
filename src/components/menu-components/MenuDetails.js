import React from "react";
import DrinksList from "./DrinksList";
import FoodList from "./FoodList";

const MenuDetails = ({
  selectedMenu,
  addDrinkToCart,
  addFoodToCart,
  selectedCustomer,
}) => {
  return (
    <div className="details-box">
      <div id="greeting">
        {
          <h3>
            Hello {selectedCustomer.name} <br />
            Welcome to {selectedMenu.venues[0].name}.
          </h3>
        }
      </div>
      <h3>{selectedMenu.name}</h3>

      <DrinksList
        className="list"
        drinks={selectedMenu.drinks}
        addDrinkToCart={addDrinkToCart}
      />
      <FoodList
        className="list"
        foods={selectedMenu.foods}
        addFoodToCart={addFoodToCart}
      />
    </div>
  );
};

export default MenuDetails;

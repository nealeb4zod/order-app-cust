import React from "react";
import MenuDetails from "../components/menu-components/MenuDetails";

const MenuContainer = ({ selectedMenu, addDrinkToCart, addFoodToCart }) => {
  return (
    <>
      {selectedMenu ? (
        <MenuDetails
          selectedMenu={selectedMenu}
          addDrinkToCart={addDrinkToCart}
          addFoodToCart={addFoodToCart}
        />
      ) : null}
    </>
  );
};

export default MenuContainer;

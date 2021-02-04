import React from "react";
import MenuDetails from "../components/menu-components/MenuDetails";
import "../static/list.css";

const MenuContainer = ({
  selectedMenu,
  addDrinkToCart,
  addFoodToCart,
  selectedCustomer,
  enterCheckout,
}) => {
  return (
    <>
      {selectedMenu && enterCheckout === false ? (
        <MenuDetails
          selectedMenu={selectedMenu}
          addDrinkToCart={addDrinkToCart}
          addFoodToCart={addFoodToCart}
          selectedCustomer={selectedCustomer}
        />
      ) : null}
    </>
  );
};

export default MenuContainer;

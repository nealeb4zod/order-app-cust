import React from "react";
import Cart from "./Cart";

const Header = ({
  foodCart,
  drinkCart,
  checkoutCart,
  customers,
  selectedVenue,
}) => {
  const items = drinkCart.length + foodCart.length;
  return (
    <>
      <h1>roundIn</h1>
      {items > 0 ? (
        <Cart
          foodCart={foodCart}
          drinkCart={drinkCart}
          checkoutCart={checkoutCart}
          customers={customers}
          selectedVenue={selectedVenue}
        />
      ) : null}
    </>
  );
};

export default Header;

import React from "react";
import Cart from "./Cart";

const Header = ({
  enterCheckout,
  cartTotal,
  cartItems,
  updateEnterCheckout,
}) => {
  const handleCheckout = (e) => {
    updateEnterCheckout();
  };
  return (
    <span>
      <h1>roundIn</h1>
      {cartItems > 0 && enterCheckout === false ? (
        <>
          <h4>
            {" "}
            Items: {cartItems} £{(cartTotal / 100).toFixed(2)}
          </h4>
          <button type="button" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      ) : null}
    </span>
  );
};

export default Header;

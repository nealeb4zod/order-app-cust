import React from "react";
import "../static/header.css";

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
    <div id="header-container">
      <h1>roundIn</h1>
      {cartItems > 0 && enterCheckout === false ? (
        <div id="cart">
          <h4> Items: {cartItems}</h4>
          <h4>Total: £{(cartTotal / 100).toFixed(2)}</h4>
          <button type="button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;

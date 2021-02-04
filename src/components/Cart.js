import React, { useState } from "react";

const Cart = ({
  foodCart,
  drinkCart,
  checkoutCart,
  selectedCustomer,
  selectedVenue,
}) => {
  const [order, setOrder] = useState({
    venue: { ...selectedVenue },
    foods: [],
    drinks: [],
    collectionDate: "",
    collectionTime: "",
    customer: { ...selectedCustomer },
    collected: false,
  });

  let total = 0;
  drinkCart.forEach((item) => (total += item.price));
  foodCart.forEach((item) => (total += item.price));

  const items = drinkCart.length + foodCart.length;

  const handleTimeChange = (event) => {
    let propertyName = event.target.name;
    let copiedOrder = { ...order };
    copiedOrder[propertyName] = event.target.value;
    setOrder(copiedOrder);
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    let copiedOrder = { ...order };
    copiedOrder.drinks = [...drinkCart];
    copiedOrder.foods = [...foodCart];
    checkoutCart(copiedOrder);
    setOrder({
      venue: { ...selectedVenue },
      foods: [],
      drinks: [],
      collectionDate: "",
      collectionTime: "",
      customer: { ...selectedCustomer },
      collected: false,
    });
  };

  return (
    <>
      {items > 0 ? (
        <>
          <form onSubmit={handleCheckout}>
            <h3>Items in cart: {items}</h3>
            <h2>Total: £{(total / 100).toFixed(2)}</h2>

            <br />
            <label>
              Collection Time:{" "}
              <input
                type="time"
                name="collectionTime"
                onChange={handleTimeChange}
                defaultValue={order.collectionTime}
              ></input>
            </label>
            <br />
            <label>
              Collection Date:{" "}
              <input
                type="date"
                name="collectionDate"
                onChange={handleTimeChange}
                defaultValue={order.collectionTime}
              ></input>
            </label>
            <br />
            <button type="submit">Checkout</button>
            <br />
          </form>
        </>
      ) : null}
    </>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDidMountEffect } from "../hooks/useDidMountEffect";
import MenuContainer from "./MenuContainer";
import Header from "../components/Header";
import Cart from "../components/Cart";
import ErrorPage from "../components/ErrorPage";
import VenueBar from "../components/VenueBar";
import Request from "../helpers/Request";

import "../static/main.css";

function MainContainer() {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState();
  const [selectedMenu, setSelectedMenu] = useState();
  const [drinkCart, setDrinkCart] = useState([]);
  const [foodCart, setFoodCart] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [cartItems, setCartItems] = useState();
  const [cartTotal, setCartTotal] = useState();
  const [enterCheckout, setEnterCheckout] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/venues")
      .then((res) => res.json())
      .then((data) => {
        setVenues(data);
      })
      .then();
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      })
      .then();
  }, []);

  useDidMountEffect(() => {
    fetch("http://localhost:8080/menus/venue/" + selectedVenue.id)
      .then((res) => res.json())
      .then((data) => {
        setSelectedMenu(data[0]);
      });
  }, [selectedVenue]);

  useDidMountEffect(() => {
    const items = drinkCart.length + foodCart.length;
    setCartItems(items);
  }, [drinkCart, foodCart]);

  useDidMountEffect(() => {
    let total = 0;
    drinkCart.forEach((item) => (total += item.price));
    foodCart.forEach((item) => (total += item.price));
    setCartTotal(total);
  }, [cartItems]);

  const updateEnterCheckout = () => {
    setEnterCheckout(true);
  };

  const onUpdateVenue = (venue) => {
    setSelectedVenue(venue);
  };

  const onUpdateCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const addDrinkToCart = (itemIndex) => {
    const item = selectedMenu.drinks[itemIndex];
    const updatedDrinkCart = [...drinkCart, item];
    setDrinkCart(updatedDrinkCart);
  };

  const addFoodToCart = (itemIndex) => {
    const item = selectedMenu.foods[itemIndex];
    const updatedFoodCart = [...foodCart, item];
    setFoodCart(updatedFoodCart);
  };

  const checkoutCart = (order) => {
    const request = new Request();
    request.post("http://localhost:8080/orders", order);
    window.location.reload();
  };

  return (
    <Router>
      <>
        <Header
          cartItems={cartItems}
          cartTotal={cartTotal}
          enterCheckout={enterCheckout}
          updateEnterCheckout={updateEnterCheckout}
        />
        {!selectedCustomer && !selectedVenue ? (
          <VenueBar
            venues={venues}
            onUpdateVenue={onUpdateVenue}
            selectedVenue={selectedVenue}
            customers={customers}
            onUpdateCustomer={onUpdateCustomer}
          />
        ) : null}
        {enterCheckout === true ? (
          <Cart
            cartTotal={cartTotal}
            cartItems={cartItems}
            foodCart={foodCart}
            drinkCart={drinkCart}
            checkoutCart={checkoutCart}
            selectedCustomer={selectedCustomer}
            selectedVenue={selectedVenue}
          />
        ) : null}
        <Switch>
          <Route
            path="/"
            render={() => (
              <MenuContainer
                selectedCustomer={selectedCustomer}
                selectedMenu={selectedMenu}
                addDrinkToCart={addDrinkToCart}
                addFoodToCart={addFoodToCart}
                enterCheckout={enterCheckout}
              />
            )}
          />
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  );
}

export default MainContainer;

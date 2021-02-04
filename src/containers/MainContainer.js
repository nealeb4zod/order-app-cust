import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDidMountEffect } from "../hooks/useDidMountEffect";
import { useInterval } from "../hooks/useInterval";
import MenuContainer from "./MenuContainer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ErrorPage from "../components/ErrorPage";
import VenueBar from "../components/VenueBar";
import Request from "../helpers/Request";

function MainContainer() {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState();
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState();
  const [drinkCart, setDrinkCart] = useState([]);
  const [foodCart, setFoodCart] = useState([]);
  const [customers, setCustomers] = useState([]);

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

  const onUpdateVenue = (venue) => {
    setSelectedVenue(venue);
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
    setDrinkCart([]);
    setFoodCart([]);
  };

  return (
    <Router>
      <>
        <Header
          drinkCart={drinkCart}
          foodCart={foodCart}
          checkoutCart={checkoutCart}
          customers={customers}
          selectedVenue={selectedVenue}
        />
        <VenueBar
          venues={venues}
          onUpdateVenue={onUpdateVenue}
          selectedVenue={selectedVenue}
        />
        <Switch>
          <Route
            path="/"
            render={() => (
              <MenuContainer
                menus={menus}
                selectedMenu={selectedMenu}
                addDrinkToCart={addDrinkToCart}
                addFoodToCart={addFoodToCart}
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

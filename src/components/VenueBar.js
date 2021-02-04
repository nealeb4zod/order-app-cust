import React, { useState } from "react";
import "../static/venue-bar.css";

const VenueBar = ({ venues, onUpdateVenue, customers, onUpdateCustomer }) => {
  const [stateSelectedVenue, setStateSelectedVenue] = useState(venues[0]);
  const [stateSelectedCustomer, setStateSelectedCustomer] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUpdateCustomer(stateSelectedCustomer);
    onUpdateVenue(stateSelectedVenue);
  };

  const handleChange = (event) => {
    let selectedVenue = venues[event.target.value];
    setStateSelectedVenue(selectedVenue);
  };

  const selectVenue = venues.map((venue, index) => {
    return (
      <option key={index} value={index}>
        {venue.name}
      </option>
    );
  });

  const selectCustomer = customers.map((customer, index) => {
    return (
      <option key={index} value={index}>
        {customer.name}
      </option>
    );
  });

  const handleCustomerChange = (event) => {
    const selectedCustomer = customers[event.target.value];
    setStateSelectedCustomer(selectedCustomer);
  };
  return (
    <>
      <div id="form-container">
        <form id="venue-bar-form" onSubmit={handleFormSubmit}>
          <h2>Login:</h2>
          <label htmlFor="name">Customer:</label>
          <select name="index" onChange={handleCustomerChange}>
            <option>Select a Customer...</option>
            {selectCustomer}
          </select>
          <label htmlFor="venue">Venue:</label>
          <select name="venue" onChange={handleChange}>
            <option>Please select a venue...</option> {selectVenue}
          </select>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default VenueBar;

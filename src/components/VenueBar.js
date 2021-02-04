import React, { useState } from "react";

const VenueBar = ({ venues, onUpdateVenue, selectedVenue }) => {
  const [stateSelectedVenue, setStateSelectedVenue] = useState(venues[0]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUpdateVenue(stateSelectedVenue);
  };

  const handleChange = (event) => {
    let selectedVenue = venues[event.target.value];
    setStateSelectedVenue(selectedVenue);
  };

  const selectOptions = venues.map((venue, index) => {
    return (
      <option key={index} value={index}>
        {venue.name}
      </option>
    );
  });
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          <select onChange={handleChange}>
            <option>Please select a venue...</option> {selectOptions}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default VenueBar;

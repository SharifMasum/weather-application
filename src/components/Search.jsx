import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../Api";
import { GrLocation, GrFavorite } from "react-icons/gr";

// Search component for selecting a city, toggling units, and adding favorites
const Search = ({ setCity, unit, setUnit, addToFavorites }) => {
  const [search, setSearch] = useState(null);

  // Function to load city options asynchronously based on user input
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  // Handler for when a city is selected from the dropdown
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    setCity(searchData.value);
  };

  // Handler for getting the user's current location
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setCity(`${lat},${lon}`);
      });
    }
  };

  // Handler for adding the current search to favorites
  const handleFavoriteClick = () => {
    if (!search) return;
    addToFavorites(search.label);
    setSearch(null); // Clear the search input after adding to favorites
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600} // Delay for debouncing user input
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          className="text-xl text-gray-500 rounded-md font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <GrLocation
          size={25}
          onClick={handleLocationClick}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <GrFavorite
          size={25}
          onClick={handleFavoriteClick}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-4/4 items-center justify-end">
        <button
          onClick={() => setUnit(unit === "c" ? "f" : "c")} // Toggle between Celsius and Fahrenheit
          className="text-xl font-light px-5 py-1 transition hover:scale-105"
        >
          {`°${unit === "c" ? "F" : "C"}`}
        </button>
      </div>
    </div>
  );
};

export default Search;

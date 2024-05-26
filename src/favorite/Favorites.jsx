import React from "react";

const Favorites = ({
  favoriteCities,
  removeFromFavorites,
  handleCitySelection,
}) => {
  return (
    <div className="mt-8 mb-6 h-full">
      <h2 className="flex justify-center font-bold">Favourite Cities</h2>
      <ul>
        {favoriteCities.map((city) => (
          <li className="flex justify-between items-center mt-2" key={city}>
            <button onClick={() => handleCitySelection(city)}>
              {city}
            </button>
            <button onClick={() => removeFromFavorites(city)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

import React, { useState } from "react";
import Favorites from "./Favorites";
import Navbar from "../navbar/Navbar";
import { useSelectedCity } from "../Context";

const FavoritesPage = () => {
  const { setSelectedCity } = useSelectedCity();
  const [favoriteCities, setFavoriteCities] = useState(() => {
    const storedFavorites = localStorage.getItem('favoriteCities');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const removeFromFavorites = (city) => {
    const updatedFavorites = favoriteCities.filter((c) => c !== city);
    setFavoriteCities(updatedFavorites);
    localStorage.setItem('favoriteCities', JSON.stringify(updatedFavorites));
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="max-w-screen-md mx-auto mt-4 py-5 px-32 bg-gradient-to-br from-blue-400 to-blue-700 h-fit shadow-xl rounded-lg">
      <Navbar />
      <Favorites
        favoriteCities={favoriteCities}
        removeFromFavorites={removeFromFavorites}
        handleCitySelection={handleCitySelection}
      />
    </div>
  );
};

export default FavoritesPage;
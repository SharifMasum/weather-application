import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import Search from "./components/Search";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import Forecast from "./components/Forecast";
import { getFormattedWeatherData } from "./service/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelectedCity } from "./Context";

const Home = () => {
  const [city, setCity] = useState("Tampere"); // Default city
  const [unit, setUnit] = useState("c"); // Default unit (Celsius)
  const [weather, setWeather] = useState(null);
  const [favoriteCities, setFavoriteCities] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteCities");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const { selectedCity } = useSelectedCity();

  // Update city if selectedCity changes
  useEffect(() => {
    if (selectedCity) {
      setCity(selectedCity);
    }
  }, [selectedCity]);

  // Fetch weather data whenever city or unit changes
  useEffect(() => {
    getFormattedWeatherData(city, unit)
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
        });
      });
  }, [city, unit]);

  // Function to determine background gradient based on weather conditions
  const formatBackground = () => {
    if (!weather) return "bg-gradient-to-br from-gray-100 to-gray-200";

    const isDay = weather.is_day === 1;
    const isRainy = weather.condition_text.includes("rain");

    if (isDay && isRainy) return "from-blue-200 to-blue-400";
    if (isDay && !isRainy) return "from-blue-400 to-blue-600";
    if (!isDay && isRainy) return "from-gray-800 to-gray-900";
    if (!isDay && !isRainy) return "from-gray-900 to-gray-1000";
  };

  // Function to add a city to the list of favorite cities
  const addToFavorites = (city) => {
    const updatedFavorites = [...favoriteCities, city];
    setFavoriteCities(updatedFavorites);
    localStorage.setItem("favoriteCities", JSON.stringify(updatedFavorites));
  };

  return (
    <div
      className={`max-w-screen-md mx-auto mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400 rounded-lg`}
    >
      <Navbar />
      <Search
        setCity={setCity}
        unit={unit}
        setUnit={setUnit}
        addToFavorites={addToFavorites}
      />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} unit={unit} />
          <Forecast
            title="hourly forecast"
            unit={unit}
            forecast={weather.hourlyForecast}
          />
          <Forecast
            title="daily forecast"
            unit={unit}
            forecast={weather.dailyForecast}
          />
        </>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
};

export default Home;

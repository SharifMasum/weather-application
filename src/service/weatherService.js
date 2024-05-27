import { DateTime } from "luxon";
import { BASE_URL } from "../Api";

const API_KEY = "716018a909bb4ed3a7692446242104";

// Function to fetch data from the weather API
const fetchData = async (apiMethod, searchParams) => {
  const url = new URL(`${BASE_URL}/${apiMethod}.json`);
  url.search = new URLSearchParams({ key: API_KEY, ...searchParams });

  const res = await fetch(url);
  return await res.json();
};

// Function to get formatted weather data for a specified city
export const getFormattedWeatherData = async (city) => {
  const rawWeatherData = await fetchData("forecast", {
    q: city,
    days: 5,
  });

  const formattedWeather = formatForecastWeather(rawWeatherData);
  return formattedWeather;
};

// Function to format the raw forecast weather data
const formatForecastWeather = (data) => {
  const {
    location: {
      name: loc_name,
      country: loc_country,
      localtime_epoch: loc_epoch,
      tz_id: loc_tz,
    },
    forecast: { forecastday },
    current: {
      condition: { icon: condition_icon, text: condition_text },
      feelslike_c,
      feelslike_f,
      humidity,
      temp_c,
      temp_f,
      wind_kph,
      wind_mph,
      is_day,
    },
  } = data;

  // Format the local date and time
  const locDateTime = formatToLocalTime(loc_epoch, loc_tz);

  return {
    loc_name,
    loc_country,
    locDateTime,
    condition_text,
    condition_icon: formatIconUrl(condition_icon),
    feelslike_c,
    feelslike_f,
    humidity,
    temp_c,
    temp_f,
    wind_kph,
    wind_mph,
    is_day,
    ...formatAstroData(forecastday),
    dailyForecast: formatDailyForecast(forecastday, loc_tz),
    hourlyForecast: formatHourlyForecast(forecastday, loc_epoch, loc_tz),
  };
};

// Function to prepend "https:" to the icon URL
const formatIconUrl = (iconUrl) => `https:${iconUrl}`;

// Function to format the hourly forecast data
const formatHourlyForecast = (forecast, loc_epoch, timezone) => {
  let hourlyForecast = forecast.slice(0, 2).flatMap(({ hour }) => hour);
  hourlyForecast = hourlyForecast.filter(
    (forecast) => forecast.time_epoch > loc_epoch
  );
  hourlyForecast = hourlyForecast
    .slice(0, 5)
    .map(({ temp_c, temp_f, time_epoch, condition: { icon } }) => ({
      temp_c,
      temp_f,
      icon: formatIconUrl(icon),
      title: formatToLocalTime(time_epoch, timezone, "hh:mm a"),
    }));

  return hourlyForecast;
};

// Function to format the daily forecast data
const formatDailyForecast = (forecast, timezone) => {
  return forecast.map(({ date_epoch, day }) => ({
    title: formatToLocalTime(date_epoch, timezone, "ccc"),
    max_temp_c: day.maxtemp_c,
    max_temp_f: day.maxtemp_f,
    min_temp_c: day.mintemp_c,
    min_temp_f: day.mintemp_f,
    icon: formatIconUrl(day.condition.icon),
  }));
};

// Function to extract and format astronomical data (sunrise, sunset, etc.)
const formatAstroData = (forecast) => {
  const {
    astro: { sunrise, sunset, moonrise, moonset },
  } = forecast[0];

  return { sunrise, sunset, moonrise, moonset };
};

// Function to format an epoch time to local time in a given format and timezone
const formatToLocalTime = (
  epoch,
  timezone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(epoch).setZone(timezone).toFormat(format);
};

# Technical Documentation

Check DEV_LOG.md for development log.

Check SELF_REFLECTION.md for self-reflection

Check asset folder for video demonstration.

##	Introduction
### Purpose
The Weather Application is designed to provide users with real-time weather information for spec-ified locations. It allows users to search for weather conditions in different cities, view forecasts, and add favorite cities for quick access.

### Scope
The application includes a frontend interface built with React.js that fetch weather data from ex-ternal APIs. It provides a user-friendly interface for interacting with weather information.

## Audience
The primary audience for this software includes:
Teachers and instructors of course Application Framework of JAMK University of Applied Sci-ences for review purpose.

##	Usage
### Features
    •	Search for weather information by city name or location coordinates.
    •	View current weather conditions, including temperature, humidity, and wind speed.
    •	See hourly and daily weather forecasts.
    •	Add/remove favorite cities for quick access.

### User Interface
The user interface is intuitive and easy to navigate. It includes search inputs, weather display sec-tions, and buttons for managing favorites.

### Workflow
    •	Enter a city name or location coordinates in the search bar.
    •	View the current weather conditions and forecasts.
    •	Add favorite cities by clicking the "Add to Favorites" button.
    •	Access favorite cities from the Favorites page for quick weather updates.

##	Getting Started
### Prerequisite
Ensure that the following have been installed on your development machine:

    Node.js (v14 or higher)
    npm (v6 or higher)

## Installation
1.	Clone the repository:

    git clone https://gitlab.labranet.jamk.fi/application-framework/weather-app.git
    cd weather-forecast
2.	Install the dependencies:

    npm install
3.	Set up environment variables:

Create a .env file in the root directory and add the following:

    VITE_API_KEY = your_weather_api_key
    VITE_GEO_API_KEY = your_geo_api_key

You can get your Geo API here: https://rapidapi.com/wirefreethought/api/geodb-cities/

You can get your weather API here: https://www.weatherapi.com/

### Running the application
To start the development server:
*     npm run dev
To build the application for production:
*     npm run build
To preview the production build:
*     npm run preview
 
## Directories
    •	components/: Contains reusable React components such as Search, TimeAndLocation, TemperatureDetails, and Forecast.
    •	favorite/: Contains components related to the favorites feature, including Favorites and FvoritePage.
    •	navbar/: Contains the Navbar component.
    •	service/: Contains the weatherService.js file, which handles API calls and data formatting.
## Dependencies
### Production Dependencies
    •	@iconscout/react-unicons: Icon library.
    •	dotenv: Environment variable management.
    •	luxon: Date and time library.
    •	react: Core React library.
    •	react-bootstrap: Bootstrap components for React.
    •	react-dom: React DOM bindings.
    •	react-icons: Icon library.
    •	react-router-dom: Routing library for React.
    •	react-select-async-paginate: Async pagination for React Select.
    •	react-toastify: Toast notifications.
### Development Dependencies
    •	@types/react: TypeScript type definitions for React.
    •	@types/react-dom: TypeScript type definitions for React DOM.
    •	@vitejs/plugin-react: Vite plugin for React.
    •	autoprefixer: PostCSS plugin for vendor prefixing.
    •	eslint: JavaScript linter.
    •	eslint-plugin-react: ESLint plugin for React.
    •	eslint-plugin-react-hooks: ESLint plugin for React hooks.
    •	eslint-plugin-react-refresh: ESLint plugin for React Refresh.
    •	postcss: CSS transformations.
    •	tailwindcss: CSS framework.
    •	vite: Build tool.

##	Components
### Home.jsx
#### The main component that renders the home page. It includes:
    •	Navbar: Navigation bar.
    •	Search: Search bar for cities.
    •	TimeAndLocation: Displays current time and location.
    •	TemperatureDetails: Displays current weather details.
    •	Forecast: Displays hourly and daily weather forecasts.
    •	ToastContainer: Container for toast notifications.

### App.jsx
#### Defines the routes for the application using react-router-dom. Routes include:
    •	/: Home component.
    •	/favoritepage: FavoritePage component.

### Forecast.jsx
#### Renders the weather forecast details. Props:
    •	title: Title of the forecast section.
    •	unit: Unit of temperature (Celsius or Fahrenheit).
    •	forecast: Forecast data.

### Search.jsx
#### Search component to look up cities using the GeoDB API. Props:
    •	setCity: Function to set the selected city.
    •	unit: Unit of temperature.
    •	setUnit: Function to set the unit of temperature.
    •	addToFavorites: Function to add a city to favorites.

### TemperatureDetails.jsx
#### Displays detailed weather information. Props:
    •	unit: Unit of temperature.
    •	weather: Weather data object.

### TimeAndLocation.jsx
#### Displays the current time and location. Props:
    •	weather: Weather data object.

### FavoritePage.jsx
#### Component for managing and displaying favorite cities. It includes:
    •	Navbar: Navigation bar.
    •	Favorites: List of favorite cities.

### Favorites.jsx
#### Renders the list of favorite cities. Props:
    •	favoriteCities: List of favorite cities.
    •	removeFromFavorites: Function to remove a city from favorites.
    •	handleCitySelection: Function to handle city selection.

### Navbar.jsx
Navigation bar with links to Home and Favorites pages.

##	APIs and Services
For getting cities, we are using Rapid API’s GeoDB Cities API and for getting weather data we are using WeatherAPI. Both offers free tier subscription and that is what we are using with this appli-cation.

### Api.js
#### Defines the base URLs and headers for the APIs:
    •	GEO_API_URL: URL for the GeoDB API.
    •	geoApiOptions: Headers for the GeoDB API.
    •	BASE_URL: URL for the Weather API.

### weatherService.js
#### Contains functions to fetch and format weather data:
    •	fetchData: Fetches data from the Weather API.
    •	getFormattedWeatherData: Fetches and formats weather data.
    •	formatForecastWeather: Formats the weather data.
    •	formatIconUrl: Formats the weather icon URL.
    •	formatHourlyForecast: Formats the hourly forecast data.
    •	formatDailyForecast: Formats the daily forecast data.
    •	formatAstroData: Formats astronomical data.
    •	formatToLocalTime: Converts epoch time to local time.

##	State Management
### Context.jsx
Provides context for the selected city. The useSelectedCity hook is used to access and update the selected city across the application.

### Styling
The application uses Tailwind CSS for styling and responsiveness. The main styles are defined in index.css.

### Web deployment
#### The app is deployed in Vercel under below domain
    https://weather-n6wpdaxxm-sharifmasums-projects.vercel.app/

##	Conclusion
This technical documentation provides an overview of the Weather Application, its architecture, implementation details, installation instructions, usage guide, etc.

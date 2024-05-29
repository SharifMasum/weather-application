# Technical Documentation

## Table of Contents
#### Introduction
* Purpose
* Scope
* Audience
#### Usage
* Features
* User Interface
* Workflow
#### Getting Started
* Prerequisite
* Installation
* Running the application
#### Directories
#### Dependencies
* Production Dependencies
* Development Dependencies
#### Components
* Home.jsx
* App.jsx
* Forecast.jsx
* Search.jsx
* TemperatureDetails.jsx
* TimeAndLocation.jsx
* FavoritePage.jsx
* Favorites.jsx
* Navbar.jsx
#### API and Services
Api.js
weatherService.js
#### State Managements
* Context.jsx
* Styling
#### Development Log
#### Personal Reflection
#### Self-Evaluation
#### Development Log
#### Personal Reflection
#### Self-Evaluation
#### Areas for Improvement
#### Conclusion
#### Video Demo
#### Web deployment

##	Introduction
### Purpose
The Weather Application is designed to provide users with real-time weather information for specified locations. It allows users to search for weather conditions in different cities, view forecasts, and add favorite cities for quick access.

### Scope
The application includes a frontend interface built with React.js that fetch weather data from external APIs. It provides a user-friendly interface for interacting with weather information.

## Audience
The primary audience for this software includes:
Teachers and instructors of course Application Framework of JAMK University of Applied Sciences for review purpose.

##	Usage
### Features
* Search for weather information by city name or location coordinates.
* View current weather conditions, including temperature, humidity, and wind speed.
* See hourly and daily weather forecasts.
* Add/remove favorite cities for quick access.

### User Interface
The user interface is intuitive and easy to navigate. It includes search inputs, weather display sec-tions, and buttons for managing favorites.

### Workflow
* Enter a city name or location coordinates in the search bar.
* View the current weather conditions and forecasts.
* Add favorite cities by clicking the "Add to Favorites" button.
* Access favorite cities from the Favorites page for quick weather updates.

##	Getting Started
### Prerequisite
Ensure that the following have been installed on your development machine:

    Node.js (v14 or higher)
    npm (v6 or higher)

### Installation
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

    npm run dev
To build the application for production:

    npm run build
To preview the production build:

    npm run preview
 
## Directories
* components/: Contains reusable React components such as Search, TimeAndLocation, TemperatureDetails, and Forecast.
* favorite/: Contains components related to the favorites feature, including Favorites and FvoritePage.
* navbar/: Contains the Navbar component.
* service/: Contains the weatherService.js file, which handles API calls and data formatting.

## Dependencies
### Production Dependencies
* @iconscout/react-unicons: Icon library.
* dotenv: Environment variable management.
* luxon: Date and time library.
* react: Core React library.
* react-bootstrap: Bootstrap components for React.
* react-dom: React DOM bindings.
* react-icons: Icon library.
* react-router-dom: Routing library for React.
* react-select-async-paginate: Async pagination for React Select.
* react-toastify: Toast notifications.

### Development Dependencies
* @types/react: TypeScript type definitions for React.
* @types/react-dom: TypeScript type definitions for React DOM.
* @vitejs/plugin-react: Vite plugin for React.
* autoprefixer: PostCSS plugin for vendor prefixing.
* eslint: JavaScript linter.
* eslint-plugin-react: ESLint plugin for React.
* eslint-plugin-react-hooks: ESLint plugin for React hooks.
* eslint-plugin-react-refresh: ESLint plugin for React Refresh.
* postcss: CSS transformations.
* tailwindcss: CSS framework.
* vite: Build tool.

##	Components
### Home.jsx
#### The main component that renders the home page. It includes:
* Navbar: Navigation bar.
* Search: Search bar for cities.
* TimeAndLocation: Displays current time and location.
* TemperatureDetails: Displays current weather details.
* Forecast: Displays hourly and daily weather forecasts.
* ToastContainer: Container for toast notifications.

### App.jsx
#### Defines the routes for the application using react-router-dom. Routes include:
* /: Home component.
* /favoritepage: FavoritePage component.

### Forecast.jsx
#### Renders the weather forecast details. Props:
* title: Title of the forecast section.
* unit: Unit of temperature (Celsius or Fahrenheit).
* forecast: Forecast data.

### Search.jsx
#### Search component to look up cities using the GeoDB API. Props:
* setCity: Function to set the selected city.
* unit: Unit of temperature.
* setUnit: Function to set the unit of temperature.
* addToFavorites: Function to add a city to favorites.

### TemperatureDetails.jsx
#### Displays detailed weather information. Props:
* unit: Unit of temperature.
* weather: Weather data object.

### TimeAndLocation.jsx
#### Displays the current time and location. Props:
* weather: Weather data object.

### FavoritePage.jsx
#### Component for managing and displaying favorite cities. It includes:
* Navbar: Navigation bar.
* Favorites: List of favorite cities.

### Favorites.jsx
#### Renders the list of favorite cities. Props:
* favoriteCities: List of favorite cities.
* removeFromFavorites: Function to remove a city from favorites.
* handleCitySelection: Function to handle city selection.

### Navbar.jsx
Navigation bar with links to Home and Favorites pages.

##	APIs and Services
For getting cities, we are using Rapid API’s GeoDB Cities API and for getting weather data we are using WeatherAPI. Both offers free tier subscription and that is what we are using with this appli-cation.

### Api.js
#### Defines the base URLs and headers for the APIs:
* GEO_API_URL: URL for the GeoDB API.
* geoApiOptions: Headers for the GeoDB API.
* BASE_URL: URL for the Weather API.

### weatherService.js
#### Contains functions to fetch and format weather data:
* fetchData: Fetches data from the Weather API.
* getFormattedWeatherData: Fetches and formats weather data.
* formatForecastWeather: Formats the weather data.
* formatIconUrl: Formats the weather icon URL.
* formatHourlyForecast: Formats the hourly forecast data.
* formatDailyForecast: Formats the daily forecast data.
* formatAstroData: Formats astronomical data.
* formatToLocalTime: Converts epoch time to local time.

##	State Management
### Context.jsx
Provides context for the selected city. The useSelectedCity hook is used to access and update the selected city across the application.

### Styling
The application uses Tailwind CSS for styling and responsiveness. The main styles are defined in index.css.

## Development Log
Initially, I decided to create an e-commerce full-stack application and started working on that. But during the time or research I was also worried that I might not be able to complete it. In that case I will fall back to default assignment, and weather client app for Application Framework and doctor’s appointment server for Data Modeling and Backend Course (That was also agreed with Pasi). I worked for around 50 hours on this https://github.com/SharifMasum/e-commerce-frontend. Then finally I gave up on e-commerce and decided to make weather application client app.

### 10/03/2024: Research
#### Task/Feature: Research and Study
#### Time Spent: 8 hours.
* Researching through different types of weather app that available
* Researching weather API and Geo API options
* Researching available frameworks and libraries
* Tutorial that was followed: https://www.youtube.com/watch?v=Reny0cTTv24&list=LL

### 11/03/2024: Environment setup
#### Task/Feature: Project setup and initial configuration
#### Time Spent: 4 hours.
* Setting up the project with Create Vite App
* Installing necessary dependencies
* Initial project structure setup

### 16/03/2024: Basic Components Creation
#### Task/Feature: Creating initial components (Navbar, Search, Home)
#### Time Spent: 6 hours.
* Developing Navbar component
* Developing Search component with input field and buttons
* Developing basic Home component layout

### 17/03/2024: Weather API Integration
#### Task/Feature: Integrating weather API and fetching data
#### Time Spent: 6 hours.
* Researching weather APIs and selecting one.
* Figuring and filtering out way to specific and necessary API calls.
* Displaying fetched data in the Home component.

### 22/03/2024: Geo API Integration
#### Task/Feature: Integrating Geo API and fetching data
#### Time Spent: 6 hours.
* Researching Geo APIs and selecting one
* Figuring and filtering out way to specific and necessary API calls.
* Displaying fetched data in the Home component

### 23/03/2024: Weather Display and Styling
#### Task/Feature: Displaying weather data and styling components.
#### Time Spent: 6 hours
* Developing TimeAndLocation and TemperatureDetails components
* Styling the components with Tailwind CSS
* Implementing conditional styling based on weather conditions

### 30/03/2024: Forecast Implementation
#### Task/Feature: Implementing hourly and daily forecasts
#### Time Spent: 5 hours.
* Developing Forecast component
* Displaying hourly and daily forecasts
* Adding proper styling and layout adjustments

### 31/03/2024: Favorites Feature
#### Task/Feature: Adding the ability to save favorite cities
#### Time Spent: 7 hours.
* Developing Favorites component
* Implementing add to favorites functionality in Search component
* Managing favorite cities state in Home and FavoritesPage components

### 05/04/2024: Favorites Page and Selection
#### Task/Feature: Implementing FavoritesPage and city selection
#### Time Spent: 6 hours.
* Developing FavoritesPage component
* Handling city selection from favorites
* Integrating selected city weather display in Home component

### 06/04/2024: Context API
#### Task/Feature: Implementing context API and useState hook.
#### Time Spent: 6 hours.
* Developing Context page
* Implementing useSelectedCity which is used to access and update the selected city across the application.

### 13/04/2024: Error Handling and Notifications
#### Task/Feature: Adding error handling and toast notifications.
#### Time Spent: 4 hours.
* Implementing error handling for API calls
* Adding toast notifications for success and error messages
* Testing and refining notifications

### 20/04/2024: Testing and Debugging
#### Task/Feature: Testing and debugging the application.
#### Time Spent: 5 hours.
* Debugging and fixing issues

### 25/04/2024: Final Touches and Documentation
#### Task/Feature: Final touches and writing documentation.
#### Time Spent: 6 hours.
* Refining UI
* Writing project documentation

### 25/05/2024: Finalization
#### Task/Feature: Finalizing documentation.
#### Time Spent: 6 hours.
* Refining UI
* Finishing documentation
* Preparing for project submission

### 27/05/2024: Final touch
#### Task/Feature: Fixing minor issues.
#### Time Spent: 3 hours.
* Fixing Vercel deployment issues
* Adjusting documentation
* Creating video demonstration
* Preparing for project submission

### Total Hours
Total Time Spent: 84 hours.

## Personal Reflection
The Weather Application project has been a truly fulfilling experience for me. Not only has it allowed me to create a useful client application, but it has also given me the chance to learn and grow as a developer. One of the most valuable lessons I have learned through this project is how to effectively utilize external API services in my work.

At first, I was nervous about integrating these services into my application. However, I found that they are powerful tools that helped me create a better application. Working with external services also improved my data management and manipulation skills. I am thankful for the experience and the knowledge I gained.
Overall, I am extremely grateful for the experience that I have gained through working on the Weather Application. It has allowed me to push myself as a developer and has provided me with valuable skills and knowledge that I will carry with me throughout my career.

### Easy Parts
Creating modular and reusable components in React was straightforward due to React’s component-based architecture. Integrating external APIs was relatively simple. Handling API requests and managing responses in the client application was a familiar process.

### Hard Parts
Managing state across multiple nested components required careful attention to ensure that props were correctly passed and utilized. Ensuring that the favorite cities were managed correctly and passed between the ‘Home’ and ‘FavoritesPage’ components required additional planning and implementation.

To display components conditionally based on the state of the application, such as waiting to show weather information until the data is retrieved, demands meticulous management and trouble-shooting.

### Greatest Learning Experience
During this project, the most significant thing I learned was how to create features for specific users. For instance, I learned how to manage a user's favorite cities. To do this, I had to understand React state management, prop drilling, and component lifecycle methods. I also learned how to handle user input and keep the state consistent when users interacted with the app. The usage of external APIs is also something that I learned through this project.

## Self-Evaluation
Based on my performance and the outcomes of the project, I would give myself a grade of **4/5**. Here is why:
Core features of the application are successfully implemented, a good user experience is ensured, a clean and organized codebase is maintained.
Multiple extra requirements have been fulfilled.

### Core Requirements
#### User can search for a forecast using a location selected:
* Implemented successfully. The search component allows users to enter a city name or use their geolocation to fetch weather data.

#### App displays weather forecast for selected location (temp, wind, etc.):
* Implemented successfully. The app displays current weather conditions including temperature, wind speed, and other details.

#### User can add a location as a favorite:
* Implemented successfully. Users can add cities to their favorites using the "Add to Favorites" button.

#### User can remove a favorite location:
* Implemented successfully. Users can remove cities from their favorites list.

#### User is able to see a list of favorites and select one to display its weather forecast:
* Implemented successfully. The favorites page displays a list of favorite cities, and users can select a city to view its weather forecast.

### Extra Requirements
#### Locations for the search are loaded in an autocomplete field:
* Partially implemented. The search field does autocomplete city options, but that comes from external API, not implemented in code level.

#### User favorites are stored to local storage (available between launching time):
* Partially implemented. Local storage been utilized to save favorites, but favorites are not persisted across sessions.

#### App uses some UI framework:
* Partially implemented. Basic styling is done using CSS, functionality-based CSS frame-work Tailwind been used, but no specific UI framework like Bootstrap or Material-UI was utilized.

#### App shows forecast for multiple days:
* Implemented successfully. The app displays both hourly and daily forecasts.

#### App uses a router such as react-router for a multipage app:
* Implemented successfully. React Router is used for navigating between the Home and Favorites pages.

#### Usage of Webpack, Babel, or similar:
* Implemented successfully. The project setup includes tools like Webpack and Babel for building the React application.

#### Deployment
The app is deployed in vercel:

https://weather-n6wpdaxxm-sharifmasums-projects.vercel.app/

### Grade Justification
#### Core Requirements: 5/5
* All core functionalities are implemented successfully, providing a solid foundation for the applica-tion.

#### Extra Requirements: 7/11
* A good number of extra requirements have fulfilled, making application a complete package with pleasant user experience.

Considering everything, I believe a grade of 4/5 is justified.

## Areas for Improvement
* Retrieving cities from favorite page currently does not redirect automatically to the Home page where weather data is showing. User has to navigate themselves to Home page to see the forecast. To enhance user experience, feature that will automatically re-direct to Home page after clicking city from favorite list need to implement.
* Need to implement persistence of cities between sessions using local storage.
* Adding some sort of graphical representation may enhance user experience.

Overall, this project has been a substantial learning journey, and I am proud of the work accomplished. It has strengthened my confidence in building applications and has provided a solid foundation for future projects.

##	Conclusion
This technical documentation provides an overview of the Weather Application, its architecture, implementation details, installation instructions, usage guide, etc.

## Video Demo
The demo link: https://youtu.be/snUGiSFQW9s

## Web deployment
#### The app is deployed in Vercel under below domain
https://weather-n6wpdaxxm-sharifmasums-projects.vercel.app/
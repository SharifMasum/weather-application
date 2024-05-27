# Personal Reflection
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

### Self-Evaluation
Based on my performance and the outcomes of the project, I would give myself a grade of 4/5. Here is why:
Core features of the application are successfully implemented, a good user experience is ensured, a clean and organized codebase is maintained.
Multiple extra requirements have been fulfilled.

### Core Requirements
#### User can search for a forecast using a location selected:
Implemented successfully. The search component allows users to enter a city name or use their geolocation to fetch weather data.

#### App displays weather forecast for selected location (temp, wind, etc.):
Implemented successfully. The app displays current weather conditions including temperature, wind speed, and other details.

#### User can add a location as a favorite:
Implemented successfully. Users can add cities to their favorites using the "Add to Favorites" button.

#### User can remove a favorite location:
Implemented successfully. Users can remove cities from their favorites list.

#### User is able to see a list of favorites and select one to display its weather forecast:
Implemented successfully. The favorites page displays a list of favorite cities, and users can select a city to view its weather forecast.

### Extra Requirements
#### Locations for the search are loaded in an autocomplete field:
Partially implemented. The search field does autocomplete city options, but that comes from external API, not implemented in code level.

#### User favorites are stored to local storage (available between launching time):
Partially implemented. Local storage been utilized to save favorites, but favorites are not persisted across sessions.

#### App uses some UI framework:
Partially implemented. Basic styling is done using CSS, functionality-based CSS frame-work Tailwind been used, but no specific UI framework like Bootstrap or Material-UI was utilized.

#### App shows forecast for multiple days:
Implemented successfully. The app displays both hourly and daily forecasts.

#### App uses a router such as react-router for a multipage app:
Implemented successfully. React Router is used for navigating between the Home and Favorites pages.

#### Usage of Webpack, Babel, or similar:
Implemented successfully. The project setup includes tools like Webpack and Babel for building the React application.

#### Deployment
The app is deployed in vercel.

    https://weather-n6wpdaxxm-sharifmasums-projects.vercel.app/

### Grade Justification
#### Core Requirements: 5/5
All core functionalities are implemented successfully, providing a solid foundation for the applica-tion.

#### Extra Requirements: 7/11
A good number of extra requirements have fulfilled, making application a complete package with pleasant user experience.

Considering everything, I believe a grade of 4/5 is justified.

### Areas for Improvement
    •	Retrieving cities from favorite page currently does not redirect automatically to the Home page where weather
            data is showing. User has to navigate themselves to Home page to see the forecast. To enhance user 
            experience, feature that will automatically re-direct to Home page after clicking city from favorite list 
            need to implement.
    •	Need to implement persistence of cities between sessions using local storage.
    •	Adding some sort of graphical representation may enhance user experience.

Overall, this project has been a substantial learning journey, and I am proud of the work accomplished. It has strengthened my confidence in building applications and has provided a solid foundation for future projects.

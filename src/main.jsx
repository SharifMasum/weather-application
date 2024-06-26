import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { SelectedCityProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectedCityProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SelectedCityProvider>
  </React.StrictMode>
);

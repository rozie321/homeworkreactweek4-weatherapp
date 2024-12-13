import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weathersearchengine from "./Weathersearchengine";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>
    <App />
    <Weathersearchengine />
  </StrictMode>
);

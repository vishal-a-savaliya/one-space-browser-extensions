import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MemoryRouter>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </MemoryRouter>
);

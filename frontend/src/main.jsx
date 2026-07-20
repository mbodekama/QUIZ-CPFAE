import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "./components/Toast.jsx";
import { initSync } from "./lib/sync.js";
import { applyTheme, getTheme } from "./lib/theme.js";
import "./styles.css";

applyTheme(getTheme());
initSync();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);

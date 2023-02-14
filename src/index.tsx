import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

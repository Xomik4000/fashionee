import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/shop.scss";
import "./styles/cart.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

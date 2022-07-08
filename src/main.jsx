import React from "react";
import ReactDOM from "react-dom/client";
import GiffApp from "./GiffApp";
import GyphyState from "./context/GiphyState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GyphyState>
      <GiffApp />
    </GyphyState>
  </React.StrictMode>
);

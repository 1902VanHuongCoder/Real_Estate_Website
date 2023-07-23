import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastProvider } from "rc-toastr";
import "rc-toastr/dist/index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastProvider
      config={{
        position: "top-right",
        duration: 3000,
      }}
    >
      <App />
    </ToastProvider>
  </React.StrictMode>
);

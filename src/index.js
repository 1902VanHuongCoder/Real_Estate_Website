import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppProvider from "./Context/AppContext";
import { BrowserRouter } from "react-router-dom";
import { ChatContextProvider } from "./Context/ChatContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
);

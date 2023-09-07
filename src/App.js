import React from "react";
import "./app.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <React.StrictMode>
        <BrowserRouter>
          <AnimatedRoutes/>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bookshelf from "./component/Bookshelf";

// src/App.jsx

const App = () => {
  return (
    <div className="container">
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </div>
  );
};

export default App;

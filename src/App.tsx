import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./App.css";
import logo from "./images/logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <img src={logo} alt="Logo Dynasty"></img>
        <div className="navbar-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </div>
  );
}

export default App;

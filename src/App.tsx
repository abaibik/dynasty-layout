import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./App.css";
import logo from "./images/logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="main-header">
        <div className="logo-container">
          <img src={logo} alt="Logo Dynasty"></img>
        </div>
        <div className="navbar-menu">
          <FontAwesomeIcon icon={faBars} className="icon-navbar" />
        </div>
      </div>
    </div>
  );
}

export default App;

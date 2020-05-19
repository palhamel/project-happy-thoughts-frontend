import React from "react";
import "./logo_style.css";
import logo from "../Headliner.png";

export const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo-head" src={logo} alt="Logo" />
    </div>
  );
};

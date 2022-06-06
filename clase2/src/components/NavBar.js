import React from "react";
import Nike from "../img/Nike.jpg";
import "../App.css"

export const NavBar = () => {

  return (
    <header className="header-navbar">
      <div className="logo">
        <img src={Nike} alt="Nike" width="150" />
      </div>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
           <a href="#">Productos</a>
        </li>
      </ul>
      <div className="carro">
        <box-icon name='cart-add'></box-icon>
      </div>
    </header>
  );
};

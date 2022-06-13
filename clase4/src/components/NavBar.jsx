import React from "react";
import "./css/NavBar.css"
import {CartWidget} from "./CartWidget.jsx";
export const NavBar = () => {

  return (
    <header className="header-navbar">
      <CartWidget />
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

// Importar librerías necesarias (React)
import React from 'react';
import './navbarboot'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <a href="/">E-commerce</a>
      </div>
      <ul className="navbar__menu">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar__cart">
        <a href="/cart">🛒 Cart</a>
      </div>
    </nav>
  );
}

export default NavBar;

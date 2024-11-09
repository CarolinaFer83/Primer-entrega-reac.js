import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <h1>Mi E-commerce</h1>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/shop">Tienda</a></li>
        <li><a href="/about">Nosotros</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cantidadCarrito }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.png" alt="Logo" />
        <span>El Rincón de las Páginas</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/tienda">Tienda</Link></li>
        <li><Link to="/login">Ingresar</Link></li>
        <li><Link to="/register">Registro</Link></li>
        <li>
          <Link to="/carrito">
            🛒 Carrito {cantidadCarrito > 0 && `(${cantidadCarrito})`}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

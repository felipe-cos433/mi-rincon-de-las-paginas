// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-columns">
      <div className="footer-col">
        <h4>Contacto</h4>
        <p>📞 323-701-3467</p>
        <p>✉️ elrincondelaspaginas@com.co</p>
      </div>
      <div className="footer-col">
        <h4>Dirección</h4>
        <p>Medellín - Colombia</p>
        <p>CRR 36A - 34-67</p>
      </div>
      <div className="footer-col">
        <h4>Redes Sociales</h4>
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
      </div>
    </div>

    <div className="footer-newsletter">
      <h4>Suscríbete a Nuestro Boletín</h4>
      <form className="newsletter-form">
        <input type="email" placeholder="Ingresa tu correo" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </footer>
);

export default Footer;

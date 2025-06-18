// src/pages/Register.jsx
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('nuevoUsuario', JSON.stringify(formData));
    alert('Registro exitoso');
  };

  return (
    <div className="register-container">
      <h2>Regístrate</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Nombre *</label>
        <input type="text" name="nombre" required onChange={handleChange} />

        <label>Correo *</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Teléfono *</label>
        <input type="tel" name="telefono" required onChange={handleChange} />

        <label>Contraseña *</label>
        <input type="password" name="password" required onChange={handleChange} />

        <button type="submit">Registrarse</button>
      </form>
      <div className="login-link">
        ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
      </div>
    </div>
  );
};

export default Register;

// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/auth';
import { usuarios } from '../data/users';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const user = usuarios.find(
      u => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      loginUser(user);
      navigate(user.rol === 'admin' ? '/admin' : '/client');
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Correo</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Contraseña</label>
        <input type="password" name="password" required onChange={handleChange} />

        <button type="submit">Ingresar</button>
      </form>
      <div className="register-link">
        ¿No tienes cuenta? <a href="/register">Regístrate</a>
      </div>
    </div>
  );
};

export default Login;

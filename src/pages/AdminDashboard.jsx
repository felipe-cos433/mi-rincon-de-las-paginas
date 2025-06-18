// src/pages/AdminDashboard.jsx
import React from 'react';
import { getCurrentUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Bienvenido, {user?.nombre}</h2>
      <h3>Panel de Administración</h3>

      <ul>
        <li><a href="#">📋 Ver usuarios registrados</a></li>
        <li><a href="#">📚 Agregar productos</a></li>
        <li><a href="#">✏️ Editar destacados</a></li>
        <li><a href="#">📨 Consultar mensajes</a></li>
      </ul>

      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default AdminDashboard;

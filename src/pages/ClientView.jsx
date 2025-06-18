// src/pages/ClientView.jsx
import React from 'react';
import { getCurrentUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const ClientView = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Hola, {user?.nombre}</h2>
      <p>Gracias por visitarnos. Aquí puedes explorar recomendaciones, tus pedidos o configurar tu cuenta.</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default ClientView;

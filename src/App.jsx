import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tienda from './pages/Tienda';
import Carrito from './pages/Carrito';
import AdminDashboard from './pages/AdminDashboard';
import ClientView from './pages/ClientView';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const guardado = localStorage.getItem('carrito');
    if (guardado) setCarrito(JSON.parse(guardado));
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <>
      <Navbar cantidadCarrito={carrito.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda carrito={carrito} setCarrito={setCarrito} />} />
        <Route path="/carrito" element={<Carrito items={carrito} setCarrito={setCarrito} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={['cliente']}>
              <ClientView />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

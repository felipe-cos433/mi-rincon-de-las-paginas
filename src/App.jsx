import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Inicio from "./pages/Inicio";
import AdminPanel from "./pages/AdminPanel";
import Colecciones from "./pages/Colecciones";
import VistaProducto from "./pages/VistaProducto";
import Carrito from "./pages/Carrito";
import CompraExitosa from "./pages/CompraExitosa";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/cliente" element={<ProtectedRoute rol="cliente"><Inicio /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute rol="admin"><AdminPanel /></ProtectedRoute>} />
          <Route path="/colecciones" element={<Colecciones />} />
          <Route path="/producto" element={<VistaProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/compra-exitosa" element={<CompraExitosa />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuarios.find(u => u.email === email && u.password === password);

    if (user) {
      const rol = email === "admin@libros.com" ? "admin" : "cliente";
      login({ email, rol });
      navigate(rol === "admin" ? "/admin" : "/cliente");
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        <p className="login-link">
          ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

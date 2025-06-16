import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // reutiliza los estilos del login

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.find(u => u.email === email)) {
      setMensaje("Este correo ya está registrado.");
      return;
    }

    const nuevoUsuario = { nombre, email, password };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    setMensaje("Registro exitoso. Redirigiendo...");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleRegister}>
        <h2>Crear una cuenta</h2>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
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
        <button type="submit">Registrarse</button>
        {mensaje && <div className="mensaje">{mensaje}</div>}
      </form>
    </div>
  );
}

export default Register;

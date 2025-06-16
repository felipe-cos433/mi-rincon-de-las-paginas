import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/inicio.css";

function Inicio() {
  const { logout, usuario } = useAuth();
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const [mensajeIndex, setMensajeIndex] = useState(0);

  const mensajes = [
    "Donde cada página cuenta una historia",
    "Explora nuevas aventuras entre líneas",
    "Encuentra tu próxima lectura favorita",
    "Un rincón para los amantes de los libros"
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMensajeIndex((prev) => (prev + 1) % mensajes.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  const handleBusqueda = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
    const libros = [
      "La sombra del viento",
      "Cien años de soledad",
      "Don Quijote",
      "El nombre del viento"
    ];
    setSugerencias(
      texto.length > 1
        ? libros.filter((libro) =>
            libro.toLowerCase().includes(texto.toLowerCase())
          )
        : []
    );
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="inicio-wrapper">
      {/* NAVBAR */}
      <header>
        <nav className="navbar">
          <div className="logo" onClick={() => navigate("/cliente")}>
            <img src="/images/logo.png" alt="Logo de la tienda" />
            <span>EL RINCÓN DE LAS PÁGINAS</span>
          </div>
          <ul className="nav-links">
            <li onClick={() => navigate("/cliente")}>Inicio</li>
            <li onClick={() => navigate("/colecciones")}>Colecciones</li>
            <li onClick={() => navigate("/login")}>Ingresar</li>
            <li onClick={() => navigate("/registro")}>Registrarse</li>
          </ul>
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar libros..."
            value={busqueda}
            onChange={handleBusqueda}
          />
        </nav>
      </header>

      {/* SUGERENCIAS */}
      {sugerencias.length > 0 && (
        <ul className="sugerencias">
          {sugerencias.map((libro, i) => (
            <li key={i}>{libro}</li>
          ))}
        </ul>
      )}

      {/* BANNER */}
      <div className="hero-img">
        <img src="/images/banner-inicio.jpg" alt="Imagen de bienvenida" />
      </div>

      {/* FRASE ROTATIVA */}
      <main className="mensaje-central">
        <h1>Bienvenido{usuario?.email && `, ${usuario.email}`}</h1>
        <p className="frase">{mensajes[mensajeIndex]}</p>
        {usuario && (
          <button onClick={handleLogout}>Cerrar sesión</button>
        )}
      </main>

      {/* PRODUCTOS DESTACADOS */}
      <section className="destacados">
        <h2>Productos Destacados</h2>
        <div className="destacados-grid">
          {["harry", "got", "lotr", "hunger", "naruto"].map((p, i) => (
            <div key={i} className="producto">
              <img src={`/images/productos/${p}.png`} alt={p} />
              <h3>{p.toUpperCase()}</h3>
              <p>$99.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="servicios">
        <h2>Nuestros Servicios</h2>
        <div className="servicios-grid">
          <div className="servicio">
            <img src="/images/servicios/envio.png" alt="Envío" />
            <h3>Envío Rápido</h3>
            <p>Entregamos tus libros directo a la puerta de tu casa.</p>
          </div>
          <div className="servicio">
            <img src="/images/servicios/seleccion.png" alt="Selección" />
            <h3>Gran Selección</h3>
            <p>Cientos de títulos para cada gusto y edad.</p>
          </div>
          <div className="servicio">
            <img src="/images/servicios/atencion.png" alt="Atención" />
            <h3>Atención Personalizada</h3>
            <p>¿No sabes qué leer? Te ayudamos a elegir.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-contenido">
          <div>
            <h3>Contáctanos</h3>
            <p>Tel: 323-701-3467</p>
            <p>Email: contacto@rincondelaspaginas.com</p>
          </div>
          <div>
            <h3>Ubicación</h3>
            <p>Medellín - Colombia</p>
            <p>CRR 36A - 34-67</p>
          </div>
          <div>
            <h3>Síguenos</h3>
            <div className="social-icons">
              <img src="/images/social/facebook.png" alt="Facebook" />
              <img src="/images/social/instagram.png" alt="Instagram" />
              <img src="/images/social/twitter.png" alt="Twitter" />
            </div>
          </div>
        </div>
        <div className="footer-boletin">
          <h3>Suscríbete a nuestro boletín</h3>
          <form>
            <input type="email" placeholder="Tu correo" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Inicio;

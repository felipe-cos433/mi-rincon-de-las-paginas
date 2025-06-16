import "../styles/colecciones.css";
import { useNavigate } from "react-router-dom";

function Colecciones() {
  const navigate = useNavigate();

  const productos = [
    {
      titulo: "Harry Potter Deluxe",
      precio: "$359.99",
      imagen: "/images/productos/harry.png"
    },
    {
      titulo: "Game of Thrones Deluxe",
      precio: "$569.99",
      imagen: "/images/productos/got.png"
    },
    {
      titulo: "The Lord of the Rings + Hobbit",
      precio: "$789.99",
      imagen: "/images/productos/lotr.png"
    },
    {
      titulo: "The Hunger Games Deluxe",
      precio: "$59.99",
      imagen: "/images/productos/hunger.png"
    },
    {
      titulo: "Naruto Box Set",
      precio: "$89.99",
      imagen: "/images/productos/naruto.png"
    }
  ];

  return (
    <div className="colecciones-wrapper">
      {/* FILTROS LATERALES */}
      <aside className="filtros">
        <h3>Filtrar por</h3>
        <label><input type="checkbox" /> Autoayuda</label>
        <label><input type="checkbox" /> Infantiles</label>
        <label><input type="checkbox" /> Novelas</label>
        <h4>Rango de precio</h4>
        <input type="range" min="0" max="800" />
      </aside>

      {/* PRODUCTOS */}
      <section className="productos">
        <h2>Todas las Colecciones</h2>
        <div className="grid-productos">
          {productos.map((p, i) => (
            <div key={i} className="tarjeta-producto">
              <img src={p.imagen} alt={p.titulo} />
              <h3>{p.titulo}</h3>
              <p>{p.precio}</p>
              <button onClick={() => navigate("/producto")}>Ver más</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Colecciones;

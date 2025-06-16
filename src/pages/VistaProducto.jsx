import "../styles/vistaProducto.css";
import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

function VistaProducto() {
  const { agregarProducto } = useCarrito();
  const navigate = useNavigate();

  const producto = {
    id: 1,
    titulo: "Harry Potter Deluxe",
    precio: 359.99,
    imagen: "/images/productos/harry.png",
    cantidad: 1
  };

  const handleAgregar = () => {
    agregarProducto(producto);
    navigate("/carrito");
  };

  return (
    <div className="vista-producto-wrapper">
      <div className="imagen-producto">
        <img src={producto.imagen} alt={producto.titulo} />
      </div>

      <div className="detalle-producto">
        <h2>{producto.titulo}</h2>
        <p className="descripcion">
          La colección definitiva de Harry Potter en tapa dura ilustrada...
        </p>
        <p className="precio">${producto.precio.toFixed(2)}</p>

        <button className="btn-agregar" onClick={handleAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default VistaProducto;

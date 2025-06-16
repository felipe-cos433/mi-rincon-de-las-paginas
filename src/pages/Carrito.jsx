import { useState } from "react";
import "../styles/carrito.css";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const navigate = useNavigate();

  // Simulador de carrito almacenado temporalmente (luego puedes conectarlo con localStorage o context)
  const [carrito, setCarrito] = useState([
    {
      id: 1,
      titulo: "Harry Potter Deluxe",
      precio: 359.99,
      cantidad: 1,
      imagen: "/images/productos/harry.png"
    },
    {
      id: 2,
      titulo: "Naruto Box Set",
      precio: 89.99,
      cantidad: 2,
      imagen: "/images/productos/naruto.png"
    }
  ]);

  const eliminarItem = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const confirmarCompra = () => {
    setCarrito([]);
    navigate("/compra-exitosa");
  };

  return (
    <div className="carrito-wrapper">
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="carrito-contenido">
          {carrito.map((item) => (
            <div className="item-carrito" key={item.id}>
              <img src={item.imagen} alt={item.titulo} />
              <div>
                <h3>{item.titulo}</h3>
                <p>Precio: ${item.precio.toFixed(2)}</p>
                <p>Cantidad: {item.cantidad}</p>
                <button onClick={() => eliminarItem(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <hr />
          <div className="resumen">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={confirmarCompra}>Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;

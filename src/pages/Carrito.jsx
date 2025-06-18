import React, { useState } from 'react';
import './Carrito.css';

const Carrito = ({ items, setCarrito }) => {
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="carrito-container">
      <h2>Carrito de compras</h2>

      {items.length === 0 && !compraFinalizada ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {!compraFinalizada && (
            <>
              <ul className="carrito-lista">
                {items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.producto}</strong> — {item.cantidad} x ${item.precio.toFixed(2)}
                    <br />
                    Envío: {item.tipoEnvio} | Dirección: {item.direccion}
                  </li>
                ))}
              </ul>
              <h3>Total: ${total.toFixed(2)}</h3>
              <button
                className="btn-finalizar"
                onClick={() => {
                  setCompraFinalizada(true);
                  setCarrito([]);
                  localStorage.removeItem('carrito');
                }}
              >
                Finalizar compra
              </button>
            </>
          )}

          {compraFinalizada && (
            <div className="animacion-finalizada">
              <div className="checkmark-circle">
                <div className="checkmark"></div>
              </div>
              <p>¡Gracias por tu compra!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carrito;

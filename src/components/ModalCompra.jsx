import React, { useState } from 'react';
import './ModalCompra.css';

const ModalCompra = ({ producto, onClose, onConfirm }) => {
  const [cantidad, setCantidad] = useState(1);
  const [direccion, setDireccion] = useState('');
  const [tipoEnvio, setTipoEnvio] = useState('estandar');
  const [compraExitosa, setCompraExitosa] = useState(false);

  const confirmarCompra = () => {
    const resumen = {
      producto: producto.titulo,
      precio: producto.precio,
      cantidad,
      direccion,
      tipoEnvio
    };

    onConfirm(resumen);
    setCompraExitosa(true);
    setTimeout(() => {
      setCompraExitosa(false);
      onClose();
    }, 2000);
  };

  if (!producto) return null;

  return (
    <div className="modal-compra-overlay">
      <div className="modal-compra">
        <h3>{producto.titulo}</h3>

        {compraExitosa ? (
          <div className="animacion-exito-css">
            <div className="checkmark-circle">
              <div className="checkmark"></div>
            </div>
            <p>¡Compra realizada con éxito!</p>
          </div>
        ) : (
          <>
            <label>
              Cantidad:
              <input
                type="number"
                min="1"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
              />
            </label>

            <label>
              Dirección de entrega:
              <textarea
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </label>

            <label>
              Tipo de envío:
              <select
                value={tipoEnvio}
                onChange={(e) => setTipoEnvio(e.target.value)}
              >
                <option value="estandar">Estándar (3–5 días)</option>
                <option value="express">Exprés (24–48h)</option>
              </select>
            </label>

            <div className="acciones">
              <button onClick={confirmarCompra}>Confirmar</button>
              <button onClick={onClose}>Cancelar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalCompra;

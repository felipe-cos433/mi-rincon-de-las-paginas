import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, vaciarCarrito, eliminarProducto }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}

import React, { useState } from 'react';
import './Tienda.css';
import ModalCompra from '../components/ModalCompra';

const productos = [
  { id: 1, titulo: 'Harry Potter Deluxe', categoria: 'Novelas', precio: 359.99, imagen: '/assets/harry.png' },
  { id: 2, titulo: 'Game of Thrones Deluxe', categoria: 'Novelas', precio: 569.99, imagen: '/assets/got.png' },
  { id: 3, titulo: 'The Hobbit + LOTR Deluxe', categoria: 'Novelas', precio: 789.99, imagen: '/assets/lotr.png' },
  { id: 4, titulo: 'Naruto Box Set', categoria: 'Infantiles', precio: 650, imagen: '/assets/naruto.png' },
  { id: 5, titulo: 'The Hunger Games Deluxe', categoria: 'Novelas', precio: 559.99, imagen: '/assets/hunger.png' },
  { id: 6, titulo: 'One-piece', categoria: 'Autoayuda', precio: 115, imagen: '/assets/one-piece.png' }
];

const categorias = ['Todos', 'Novelas', 'Autoayuda', 'Infantiles'];

const Tienda = ({ carrito, setCarrito }) => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [precioMaximo, setPrecioMaximo] = useState(800);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === 'Todos' || producto.categoria === categoriaSeleccionada;
    const coincidePrecio = producto.precio <= precioMaximo;
    return coincideBusqueda && coincideCategoria && coincidePrecio;
  });

  return (
    <div className="tienda-container">
      <aside className="filtro-lateral">
        <h3>Categorías</h3>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={cat === categoriaSeleccionada ? 'activo' : ''}
          >
            {cat}
          </button>
        ))}
        <h3>Precio máximo: ${precioMaximo}</h3>
        <input
          type="range"
          min="38"
          max="800"
          value={precioMaximo}
          onChange={(e) => setPrecioMaximo(Number(e.target.value))}
        />
      </aside>

      <main className="catalogo">
        <div className="barra-busqueda">
          <input
            type="text"
            placeholder="Título, Autor, Género"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="productos-grid">
          {productosFiltrados.map((producto) => (
            <div className="producto-card" key={producto.id}>
              <img src={producto.imagen} alt={producto.titulo} className="producto-img" />
              <h4>{producto.titulo}</h4>
              <p>${producto.precio.toFixed(2)}</p>
              <button
                className="btn-comprar"
                onClick={() => {
                  setProductoSeleccionado(producto);
                  setMostrarModal(true);
                }}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </main>

      {mostrarModal && productoSeleccionado && (
        <ModalCompra
          producto={productoSeleccionado}
          onClose={() => {
            setMostrarModal(false);
            setProductoSeleccionado(null);
          }}
          onConfirm={(detalleCompra) => {
            setCarrito((prev) => [...prev, detalleCompra]);
            setMostrarModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Tienda;

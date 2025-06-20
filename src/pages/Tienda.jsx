import React, { useState, useEffect } from 'react';
import './Tienda.css';
import ModalCompra from '../components/ModalCompra';

const categorias = ['Todos', 'Novelas', 'Autoayuda', 'Infantiles'];

const Tienda = ({ carrito, setCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [precioMaximo, setPrecioMaximo] = useState(800);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  // 🔄 Obtener productos del backend
  useEffect(() => {
    fetch('http://localhost:4000/api/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === 'Todos' || producto.categoria === categoriaSeleccionada;
    const coincidePrecio = producto.precio <= precioMaximo;
    return coincideBusqueda && coincideCategoria && coincidePrecio;
  });

  const enviarOrden = (detalleCompra) => {
    fetch('http://localhost:4000/api/orden', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(detalleCompra)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Orden registrada:', data);
      })
      .catch(err => {
        console.error('Error al registrar orden:', err);
      });
  };

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
            enviarOrden(detalleCompra); // 👈 POST a /api/orden
            setMostrarModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Tienda;

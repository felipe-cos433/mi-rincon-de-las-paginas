import React from 'react';
import './Servicios.css';

const servicios = [
  {
    titulo: 'Envío a Domicilio',
    descripcion:
      'Ofrecemos envíos rápidos y seguros a tu hogar para que disfrutes tus libros favoritos sin salir de casa.',
    imagen: '/assets/envio.png',
  },
  {
    titulo: 'Amplia Selección',
    descripcion:
      'Contamos con una gran variedad de libros de todos los géneros y para todos los gustos.',
    imagen: '/assets/seleccion.png',
  },
  {
    titulo: 'Atención Personalizada',
    descripcion:
      'Te ayudamos a encontrar los libros que mejor se adapten a tus intereses y necesidades.',
    imagen: '/assets/personalizada.png',
  },
];

const Servicios = () => (
  <section className="servicios-section">
    <h2 className="servicios-title">Nuestros Servicios</h2>
    <div className="servicios-grid">
      {servicios.map((servicio, index) => (
        <div className="servicio-card" key={index}>
          <img src={servicio.imagen} alt={servicio.titulo} className="servicio-icono" />
          <h3>{servicio.titulo}</h3>
          <p>{servicio.descripcion}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Servicios;

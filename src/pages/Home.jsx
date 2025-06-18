import React from 'react';
import Featured from '../components/Featured';
import Servicios from '../components/Servicios';
import './Home.css'; // Asegúrate de importar los estilos

const Home = () => {
  return (
    <main>
      <section className="bienvenida">
        <h1>Bienvenido a El Rincón de las Páginas</h1>
        <p>Explora nuestros libros, packs exclusivos y servicios personalizados.</p>
      </section>

      <Featured />
      <Servicios />
    </main>
  );
};

export default Home;

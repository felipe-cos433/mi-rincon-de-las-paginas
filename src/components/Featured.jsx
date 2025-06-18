import React from 'react';
import './Featured.css';

const featuredBooks = [
  {
    title: 'Harry Potter Deluxe',
    price: 359.99,
    image: '/assets/harry.png',
  },
  {
    title: 'Game of Thrones Deluxe',
    price: 569.99,
    image: '/assets/got.png',
  },
  {
    title: 'The Lord of the Rings + Hobbit',
    price: 789.99,
    image: '/assets/lotr.png',
  },
  {
    title: 'The Hunger Games Deluxe',
    price: 559.99,
    image: '/assets/hunger.png',
  },
];

const Featured = () => (
  <section className="featured-section">
    <h2 className="featured-title">Destacados</h2>
    <div className="featured-grid">
      {featuredBooks.map((book, index) => (
        <div className="featured-card" key={index}>
          <img src={book.image} alt={book.title} className="card-image" />
          <div className="card-title">{book.title}</div>
          <div className="card-price">${book.price.toFixed(2)}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Featured;

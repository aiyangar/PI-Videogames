import React, { useState } from 'react';
import Card from '../Card/Card.jsx';
import './Cards.styles.css';

const Cards = ({ info }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 15;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = info.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Número total de páginas
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(info.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className='cardsContainer'>
        {currentCards.map((item) => (
          <Card
            id={item.id}
            name={item.name}
            description={item.description}
            platform={item.platform}
            image={item.image}
            released={item.released}
            rating={item.rating}
            genre={item.genre}
            key={item.id}
          />
        ))}
      </div>
      <div className='pagination'>
          {currentPage > 1 && (
            <button onClick={() => paginate(currentPage - 1)}>Anterior</button>
          )}

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </button>
          ))}

          {currentPage < pageNumbers.length && (
            <button onClick={() => paginate(currentPage + 1)}>Siguiente</button>
          )}
      </div>
    </div>
    
  );
};

export default Cards;
import React, { useState } from 'react';
import Card from '../Card/Card.jsx';
import Pagination from '../Pagination/Pagination.jsx'; // Asegúrate de importar el componente de paginación

import './Cards.styles.css';

const Cards = ({ info }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 15;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = info.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="cardsContainer">{
        currentCards.map((item) => (
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
      <Pagination
        currentPage={currentPage}
        totalItems={info.length}
        itemsPerPage={cardsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Cards;

import React from 'react';
import './Pagination.styles.css';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPageNumbers = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPageNumbers }, (_, i) => i + 1);

  const maxPagesToShow = 3; // Número máximo de páginas intermedias para mostrar
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > totalPageNumbers) {
    endPage = totalPageNumbers;
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>Anterior</button>
      )}

      {pageNumbers.map((number) => {
        if (number >= startPage && number <= endPage) {
          return (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </button>
          );
        }
        return null;
      })}

      {currentPage < totalPageNumbers && (
        <button onClick={() => handlePageChange(currentPage + 1)}>Siguiente</button>
      )}
    </div>
  );
};

export default Pagination;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogame } from '../../Redux/Action/Action';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    const formattedSearchTerm = searchTerm.toLowerCase();
    dispatch(searchVideogame(formattedSearchTerm));
  };

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        placeholder="Búsqueda..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSubmit}>Buscar</button>
    </div>
  );
};

export default SearchBar;
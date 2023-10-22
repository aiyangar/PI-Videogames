import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogame } from '../../Redux/Action/Action';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    const formattedSearchTerm = searchTerm.toLowerCase();
    console.log('esto va segundo')
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
      <Link>
        {console.log('esto va primero')}
        <button onClick={handleSubmit}>Buscar</button>
      </Link>
      {console.log('esto va tercero')}
    </div>
  );
};

export default SearchBar;
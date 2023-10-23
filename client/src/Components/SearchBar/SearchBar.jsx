import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogame } from '../../Redux/Action/Action';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const formattedSearchTerm = searchTerm.toLowerCase();
    setIsLoading(true);

    try {
      await dispatch(searchVideogame(formattedSearchTerm));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        placeholder="Búsqueda..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
    </div>
  );
};


export default SearchBar;
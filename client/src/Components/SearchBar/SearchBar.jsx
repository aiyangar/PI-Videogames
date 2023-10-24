import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { searchVideogame } from '../../Redux/Action/Action';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    const formattedSearchTerm = searchTerm.toLowerCase();
    setIsLoading(true);
    setError(null);

    try {
      navigate('/videogames');
      await dispatch(searchVideogame(formattedSearchTerm));
    } catch (error) {
      setError(error);
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
      {error && <div className="error-message">{error.message}</div>}
    </div>
  );
};

export default SearchBar;

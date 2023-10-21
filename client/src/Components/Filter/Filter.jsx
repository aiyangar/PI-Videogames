import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Filter.styles.css';

import { getGenres, getPlatforms, filterVideogamesBy } from '../../Redux/Action/Action';

const Filter = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector(state => state.allGenres);
  const allPlatforms = useSelector(state => state.allPlatforms);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);

  const generateFilters = (selectedGenres, selectedPlatforms) => {
    let filters = '';
  
    if (selectedGenres.length > 0) {
      filters += 'genre=' + selectedGenres.join('&genre=') + '&';
    }
  
    if (selectedPlatforms.length > 0) {
      filters += 'platform=' + selectedPlatforms.join('&platform=') + '&';
    }
  
    return filters;
  }

  const genreOptions = [
    { value: '', label: 'Todos los géneros' },
    ...allGenres.map(genre => ({ value: genre.name, label: genre.name })),
  ];

  const platformOptions = [
    { value: '', label: 'Todas las plataformas' },
    ...allPlatforms.map(platform => ({ value: platform.name, label: platform.name })),
  ];

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    if (!selectedGenres.includes(selectedGenre)) {
      setSelectedGenres([...selectedGenres, selectedGenre]);
      const filters = generateFilters(selectedGenres, selectedPlatforms);
    dispatch(filterVideogamesBy(filters));
    }
  }

  const handlePlatformChange = (event) => {
    const selectedPlatform = event.target.value;

    if (!selectedPlatforms.includes(selectedPlatform)) {
      setSelectedPlatforms([...selectedPlatforms, selectedPlatform]);
      const filters = generateFilters(selectedGenres, selectedPlatforms);
    dispatch(filterVideogamesBy(filters));
    }
  }

  const handleRemoveGenre = (genre) => {
    const updatedGenres = selectedGenres.filter((selectedGenre) => selectedGenre !== genre);
    setSelectedGenres(updatedGenres);
  }

  const handleRemovePlatform = (platform) => {
    const updatedPlatforms = selectedPlatforms.filter((selectedPlatform) => selectedPlatform !== platform);
    setSelectedPlatforms(updatedPlatforms);
  }

  return (
    <div>
      <div className="filterContainer">
        <div className="filterOption">
          <label>Género: </label>
          <select onChange={handleGenreChange}>
            {genreOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filterOption">
          <label>Plataforma: </label>
          <select onChange={handlePlatformChange}>
            {platformOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filterOption">
          <label>Ordenar por: </label>
          <select>
            <option value="nombre-asc">Nombre (Ascendente)</option>
            <option value="nombre-desc">Nombre (Descendente)</option>
            <option value="rating-asc">Rating (Ascendente)</option>
            <option value="rating-desc">Rating (Descendente)</option>
          </select>
        </div>
      </div>
      <div className="selectedFilters">
        <div>
          Selección de géneros: 
          {selectedGenres.map((genre, index) => (
            <span key={index} className="selectedFilter" onClick={() => handleRemoveGenre(genre)}>
              {genre} &times;
            </span>
          ))}
        </div>
        <div>
          Selección de plataformas: 
          {selectedPlatforms.map((platform, index) => (
            <span key={index} className="selectedFilter" onClick={() => handleRemovePlatform(platform)}>
              {platform} &times;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Filter.styles.css';

import { getGenres, getPlatforms } from '../../Redux/Action/Action';

const Filter = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector(state => state.allGenres);
  const allPlatforms = useSelector(state => state.allPlatforms);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);

  const genreOptions = [
    { value: '', label: 'Todos los géneros' },
    ...allGenres.map(genre => ({ value: genre.name, label: genre.name })),
  ];

  const platformOptions = [
    { value: '', label: 'Todas las plataformas' },
    ...allPlatforms.map(platform => ({ value: platform.name, label: platform.name })),
  ];

  return (
    <div className="filterContainer">
      <div className="filterOption">
        <label>Género: </label>
        <select>
          {genreOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filterOption">
        <label>Plataforma: </label>
        <select>
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
  );
};

export default Filter;

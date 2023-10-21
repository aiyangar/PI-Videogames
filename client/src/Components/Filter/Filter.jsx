import React from 'react';
import './Filter.styles.css';

const Filter = () => {
  return (
    <div className="filterContainer">
      <div className="filterOption">
        <label>Género: </label>
        <select>
          <option value="">Todos los géneros</option>
          <option value="accion">Acción</option>
          <option value="aventura">Aventura</option>
          {/* Agrega más opciones de género aquí */}
        </select>
      </div>

      <div className="filterOption">
        <label>Plataforma: </label>
        <select>
          <option value="">Todas las plataformas</option>
          <option value="pc">PC</option>
          <option value="ps4">PlayStation 4</option>
          {/* Agrega más opciones de plataforma aquí */}
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

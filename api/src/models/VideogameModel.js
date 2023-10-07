const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "No description available"
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No platforms available"
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://via.placeholder.com/150"
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    genre:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    timestamps: false,
  }
  );
};
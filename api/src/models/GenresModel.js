const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genre', {
        genreId: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true,
            allowNull: false,
        },
        genreName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        timestamps: false
    }
    );
};
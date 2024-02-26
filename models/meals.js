const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meals extends Model { }

Meals.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        meal_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        meal_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [8]
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'meals',
    }
);

module.exports = Meals;
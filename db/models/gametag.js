"use strict";
const { DataTypes } = require("sequelize");
const initGametag= (sequelize) =>
  sequelize.define(
    "Gametag",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      gameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "games",  
          key: "id",
        }
      },
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tags", 
          key: "id",
        }
      },       
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      underscored: true,
    }
  );

  
module.exports = initGametag;

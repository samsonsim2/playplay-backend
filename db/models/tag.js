"use strict";
const { DataTypes } = require("sequelize");
const initTag= (sequelize) =>
  sequelize.define(
    "Tag",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tag: {
        type: DataTypes.STRING       
      }    
    },
    {
      underscored: true,
    }
  );

  
module.exports = initTag;

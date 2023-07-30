 
const { DataTypes } = require("sequelize");
const initGame= (sequelize) =>
  sequelize.define(
    "Game",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },   
      content: {
        type: DataTypes.TEXT
      },   
      
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: "tags",  
          key: "id",
        }
      },
      createdAt: {
        
        type: DataTypes.DATE
      },
      updatedAt: {
        
        type: DataTypes.DATE
      } 
       
    },
    {
      underscored: true,
    }
  );

  
module.exports = initGame;

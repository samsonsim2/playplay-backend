"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("gametags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      game_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"games",
          key:"id"
        }
      },
      tag_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"tags",
          key:"id"
        }
      },      
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
       
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("gametags");
  },
};

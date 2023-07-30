'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "gametags",
      [
        {
          game_id:1, 
          tag_id: 1,     
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          game_id:1, 
          tag_id: 3,     
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          game_id:1, 
          tag_id: 4,     
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          game_id:2, 
          tag_id: 3,     
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          game_id:2, 
          tag_id: 4,     
          created_at: new Date(),
          updated_at: new Date(),
        },
         
        
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("gametags", null, {})
  }
};

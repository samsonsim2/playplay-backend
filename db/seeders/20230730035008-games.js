'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "games",
      [
        {
          title:"Ready, Aim, Throw", 
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",      
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title:"The Big Ship Sails", 
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",      
          created_at: new Date(),
          updated_at: new Date(),
        },
        
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {})
  }
};

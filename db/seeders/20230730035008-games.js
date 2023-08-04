"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "games",
      [
        {
          title: "Ready, Aim, Throw",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "The Big Ship Sails",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Medusa",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Rock, Paper, Scissors",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Grandma’s Underpants",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Eat Poop You Cat",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Momentum",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Lorem Ipsum 1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Lorem Ipsum 2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Lorem Ipsum 3",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Lorem Ipsum 4",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Lorem Ipsum 5",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Lorem Ipsum 6",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Lorem Ipsum 7",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar fermentum tincidunt. Etiam quis tellus tincidunt dui euismod convallis non ac elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};

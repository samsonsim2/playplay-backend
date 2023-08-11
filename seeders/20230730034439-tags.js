"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          tag: "Looking",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag: "Speaking",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag: "Arms",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag: "Legs",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag: "Voice only",

          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag: "Sensitive",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag: "Finger-play",
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

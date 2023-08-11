"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "gametags",
      [
        {
          game_id: 1,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 1,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 1,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 2,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 2,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 3,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 3,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 4,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 4,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 4,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 5,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 5,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 5,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 5,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 6,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 6,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 6,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 6,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 7,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 8,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 9,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 9,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 10,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 11,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 12,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 12,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 13,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 13,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 13,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 13,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 14,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 14,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 14,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("gametags", null, {});
  },
};

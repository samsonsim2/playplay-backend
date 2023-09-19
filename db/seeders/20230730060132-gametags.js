"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "gametags",
      [
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
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 3,
          tag_id: 3,
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
          tag_id: 3,
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
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 7,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 7,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 7,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 7,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 8,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 8,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 9,
          tag_id: 2,
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
          game_id: 10,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 11,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 11,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 12,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 12,
          tag_id: 4,
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
          tag_id: 4,
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

        {
          game_id: 15,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 15,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 16,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 16,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 16,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 17,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 18,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 18,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 18,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 19,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 19,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 19,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 20,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 20,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 20,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 21,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 21,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 21,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 21,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 22,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 22,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 22,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 23,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 23,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 23,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 23,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 24,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 24,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 24,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 25,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 25,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 25,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 26,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          game_id: 26,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 27,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 27,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 27,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 28,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 28,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 28,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 29,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 29,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 29,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 29,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 30,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 30,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 30,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 30,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 31,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 31,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 32,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 32,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 32,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 33,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 33,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 33,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 34,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 34,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 34,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 35,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 35,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 35,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 35,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 36,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 36,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 36,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 37,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 37,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 37,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 38,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 38,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 39,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 39,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 39,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 40,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 40,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 40,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 41,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 41,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 41,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 42,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 42,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 43,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 43,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 43,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 44,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 44,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 45,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 45,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 46,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 46,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 47,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 47,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 47,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 48,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 48,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 48,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 49,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 49,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 49,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 50,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 50,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 51,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 52,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 52,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 53,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 53,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 54,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 54,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 55,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 55,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 55,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 56,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 56,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 56,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 57,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 57,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 58,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 58,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 58,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 58,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 59,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 59,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 60,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          game_id: 60,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 61,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 62,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 62,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 63,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 63,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 64,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 64,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 64,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 64,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 65,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          game_id: 65,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 66,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          game_id: 66,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 67,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 67,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 67,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 68,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 68,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 68,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 69,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 69,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 69,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 70,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 70,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          game_id: 70,
          tag_id: 1,
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
